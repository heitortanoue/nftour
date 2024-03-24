import nodemailer from 'nodemailer';

interface Email {
    subject: string;
    to: string;
    body: string;
}

export class EmailProvider {
    private static instance: EmailProvider;
    private transporter: nodemailer.Transporter;

    private constructor() {
        // Singleton
        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.NEXT_PUBLIC_EMAIL,
                pass: process.env.EMAIL_PASSWORD
            },
            from: process.env.NEXT_PUBLIC_EMAIL
        } as any);
    }

    public static getInstance(): EmailProvider {
        if (!EmailProvider.instance) {
            EmailProvider.instance = new EmailProvider();
        }

        return EmailProvider.instance;
    }

    public async sendEmail(email: Email) {
        const { subject, to, body } = email;

        if (!subject || !to || !body) {
            return null;
        }

        const mailToSend = {
            from: process.env.NEXT_PUBLIC_EMAIL,
            to,
            subject,
            html: body
        };

        const inDevelopment = process.env.NODE_ENV !== 'production';
        if (inDevelopment) {
            console.log('[EmailProvider]: Simulação de envio de E-mail no ambiente de desenvolvimento');
            console.log(mailToSend);
            return true;
        }

        const result = await this.transporter.sendMail(mailToSend);

        if (result) {
            return true;
        }

        return false;
    }

    private createDynamicEmailTemplate(
        template: string,
        values: { [key: string]: string | number }
    ): string {
        let updatedTemplate = template;

        // Substituir cada chave no template pelo valor correspondente
        for (const key in values) {
            const placeholder = `{{${key}}}`;
            updatedTemplate = updatedTemplate.replace(new RegExp(placeholder, 'g'), values[key].toString());
        }

        return updatedTemplate;
    }
}
