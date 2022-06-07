const BasePage = require('../basePage');
const { expect } = require('@playwright/test');

class Authentication extends BasePage {
    constructor(page) {
        super(page);

        //SignIn
        this.buttonSignIn = function () {
            return page.locator('.auth-bar__item--text');
        }
        this.titleSignIn = function () {
            return page.locator('text=Вход');
        }
        this.titleSignInThroughSocialMedia = function () {
            return page.locator('text=Через социальные сети');
        }
        this.titleSignInThroughEmail = function () {
            return page.locator('text=или через ник, e-mail');
        }
        this.fieldLogin = function () {
            return page.locator('[placeholder="Ник или e-mail"]');
        }
        this.fieldPassword = function () {
            return page.locator('[placeholder="Пароль"]');
        }
        this.buttonSubmit = function () {
            return page.locator('button:has-text("Войти")');
        }

        //forgotPassword
        this.linkForgotPassword = function () {
            return page.locator('text=Я не помню пароль');
        }
        this.titleRecoveryPassword = function () {
            return page.locator('text=Восстановление пароля');
        }
        this.descriptionRecoveryPassword = function () {
            return page.locator('.auth-form__description_primary');
        }
        this.fieldPasswordRecovery = function () {
            return page.locator('[placeholder="Ник\\, e-mail или номер телефона"]');
        }
        this.helperAfterfieldPasswordRecovery = function () {
            return page.locator('text=Например, телефон: +375 XX XXX-XX-XX');
        }
        this.buttonNext = function () {
            return page.locator('text=Далее');
        }
        this.errorMessage = function () {
            return page.locator('.auth-form__description_error');
        }

        //registration
        this.linkRegistration = function () {
            return page.locator('text=Зарегистрироваться на Onlíner');
        }
        this.titleRegistration = function () {
            return page.locator('text=Регистрация');
        }
        this.titleRegistrationThroughSocialMedia = function () {
            return page.locator('text=Через социальные сети');
        }
        this.titleRegistrationThroughEmail = function () {
            return page.locator('text=или через e-mail');
        }
        this.fieldEmailRegistration = function () {
            return page.locator('[placeholder="Ваш e-mail"]');
        }
        this.fieldCreatePassword = function () {
            return page.locator('[placeholder="Придумайте пароль"]');
        }
        this.passwordDescription = function () {
            return page.locator('.auth-form__securebox .auth-form__description');
        }

        this.fieldRepeatPassword = function () {
            return page.locator('[placeholder="Повторите пароль"]');
        }
        this.buttonRegistration = function () {
            return page.locator('text=Зарегистрироваться');
        }
        this.linkSignInOnRegistrationPage = function () {
            return page.locator('text=Войти');
        }
        this.checkBoxPrivacyPolicy = function () {
            return page.locator('.i-checkbox__faux');
        }
        this.confermationWindow = function () {
            return page.locator('text=Подтвердите ваш e-mail');
        }
        //Social media buttons
        this.buttonFacebook = function () {
            return page.locator('.auth-form__button_fb');
        }
        this.buttonVK = function () {
            return page.locator('.auth-form__button_vk');
        }
        this.buttonGoogle = function () {
            return page.locator('.auth-form__button_gg');
        }
        //Captcha
        this.checkBoxCaptcha = function () {
            return page.frameLocator('iframe[role="presentation"]').locator('span[role="checkbox"]');
        }
        this.windowCaptcha = function () {
            return page.frameLocator('iframe[title="recaptcha challenge expires in two minutes"]').locator('#rc-imageselect');
        }

    }

    //registry
    async registry(email = 'i_try.another@gmail.com', password = 'Qwerty123!') {
        await page.goto('https://profile.onliner.by/registration');
        await this.fieldEmailRegistration().waitFor('visible');
        await this.fieldEmailRegistration().fill(email);
        await this.fieldCreatePassword().fill(password);
        await this.fieldRepeatPassword().fill(password);
        await this.checkBoxPrivacyPolicy().click();
        await this.buttonRegistration().click();
    }

    //check Registration Form - GUI
    async checkRegistrationForm() {
        await page.goto('https://profile.onliner.by/registration');
        await this.titleRegistration().waitFor('visible');
        const titleRegistration = await this.titleRegistration().textContent()
        await expect(titleRegistration).toContain('Регистрация');
        const titleRegistrationThroughSocialMedia = await this.titleRegistrationThroughSocialMedia().textContent()
        await expect(titleRegistrationThroughSocialMedia).toContain('Через социальные сети');
        await expect(this.buttonFacebook()).toHaveClass('auth-button auth-button_subsidiary auth-button_huge auth-form__button auth-form__button_fb');
        await expect(this.buttonVK()).toHaveClass('auth-button auth-button_extra auth-button_huge auth-form__button auth-form__button_vk');
        await expect(this.buttonGoogle()).toHaveClass('auth-button auth-button_accessorial auth-button_huge auth-form__button auth-form__button_gg');
        const titleRegistrationThroughEmail = await this.titleRegistrationThroughEmail().textContent()
        await expect(titleRegistrationThroughEmail).toContain('или через e-mail');
        await expect(this.fieldEmailRegistration()).toHaveAttribute('type', 'email');
        await expect(this.fieldCreatePassword()).toHaveAttribute('type', 'password');
        await expect(this.fieldRepeatPassword()).toHaveAttribute('type', 'password');
        const passwordDescription = await this.passwordDescription().textContent();
        await expect(passwordDescription).toContain('Минимум 8 символов');
        await expect(this.checkBoxPrivacyPolicy()).toHaveClass('i-checkbox__faux');
        await expect(this.buttonRegistration()).toHaveAttribute('type', 'submit');
        await expect(this.buttonRegistration()).toHaveCSS('background-color', 'rgb(125, 191, 38)');
        const buttonRegistration = await this.buttonRegistration().textContent();
        await expect(buttonRegistration).toContain('Зарегистрироваться');

    }

    //go to signIn page
    async goToSignInPage() {
        await this.buttonSignIn().waitFor('visible');
        await this.buttonSignIn().click();
    }

    // signIn
    async signIn(login = 'itry.anotherb@gmail.com', password = 'Qwerty123!') {
        await this.fieldLogin().waitFor('visible');
        await this.fieldLogin().fill(login);
        await this.fieldPassword().fill(password);
        await this.buttonSubmit().click();
        await this.checkBoxCaptcha().waitFor('visible');
        await this.checkBoxCaptcha().click();
    }

    //check signIn Form - GUI
    async checkSignInForm() {
        await page.goto('https://profile.onliner.by/login');
        await this.titleSignIn().waitFor('visible');
        const titleSignIn = await this.titleSignIn().textContent()
        await expect(titleSignIn).toContain('Вход');
        const titleSignInThroughSocialMedia = await this.titleSignInThroughSocialMedia().textContent()
        await expect(titleSignInThroughSocialMedia).toContain('Через социальные сети');
        await expect(this.buttonFacebook()).toHaveClass('auth-button auth-button_subsidiary auth-button_huge auth-form__button auth-form__button_fb');
        await expect(this.buttonVK()).toHaveClass('auth-button auth-button_extra auth-button_huge auth-form__button auth-form__button_vk');
        await expect(this.buttonGoogle()).toHaveClass('auth-button auth-button_accessorial auth-button_huge auth-form__button auth-form__button_gg');
        const titleSignInThroughEmail = await this.titleSignInThroughEmail().textContent()
        await expect(titleSignInThroughEmail).toContain('или через ник, e-mail');
        await expect(this.fieldLogin()).toHaveAttribute('type', 'text');
        await expect(this.fieldPassword()).toHaveAttribute('type', 'password');
        await expect(this.buttonSubmit()).toHaveAttribute('type', 'submit');
        await expect(this.buttonSubmit()).toHaveCSS('background-color', 'rgb(125, 191, 38)');
        const buttonSubmit = await this.buttonSubmit().textContent();
        await expect(buttonSubmit).toContain('Войти');

    }

    // forgotPasswordAuthorizedUser
    async forgotPasswordAuthorizedUser(login = 'itry.anotherb@gmail.com') {
        await this.fieldPasswordRecovery().waitFor('visible');
        await this.fieldPasswordRecovery().fill(login);
        await this.buttonNext().click();
        await this.checkBoxCaptcha().waitFor('visible');
        await this.checkBoxCaptcha().click();
    }

    // forgotPasswordUnauthorizedUser
    async forgotPasswordUnauthorizedUser(login) {
        await this.fieldPasswordRecovery().waitFor('visible');
        await this.fieldPasswordRecovery().fill(login);
        await this.buttonNext().click();
    }

    //check forgotPassword Form - GUI
    async checkForgotPasswordForm() {
        await page.goto('https://profile.onliner.by/recover-password');
        await this.titleRecoveryPassword().waitFor('visible');
        const titleRecoveryPassword = await this.titleRecoveryPassword().textContent()
        await expect(titleRecoveryPassword).toContain('Восстановление пароля');
        const descriptionRecoveryPassword = await this.descriptionRecoveryPassword().textContent()
        await expect(descriptionRecoveryPassword).toContain('Для восстановления доступа укажите ник');
        await expect(this.fieldPasswordRecovery()).toHaveAttribute('type', 'text');
        const helperAfterfieldPasswordRecovery = await this.helperAfterfieldPasswordRecovery().textContent()
        await expect(helperAfterfieldPasswordRecovery).toContain('Например, телефон: +375 XX XXX-XX-XX');
        await expect(this.buttonNext()).toHaveAttribute('type', 'submit');
        await expect(this.buttonNext()).toHaveCSS('background-color', 'rgb(255, 139, 0)');
        const buttonNext = await this.buttonNext().textContent();
        await expect(buttonNext).toContain('Далее');

    }

}



module.exports = Authentication;