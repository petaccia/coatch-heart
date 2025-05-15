import { Request, Response } from 'express';
import passport from 'passport';
import { authService } from '../../services/authService';
import config from '../../config';

export abstract class SocialAuthBase {
  protected async handleSocialLogin(
    accessToken: string,
    refreshToken: string,
    profile: passport.Profile,
    done: (error: any, user?: any) => void
  ) {
    try {
      const email = profile.emails?.[0].value;
      const firstName = profile.name?.givenName;
      const lastName = profile.name?.familyName;

      if (!email) {
        return done(new Error('Email non fourni par le fournisseur social'));
      }

      const user = await authService.findOrCreateSocialUser({
        email,
        firstName,
        lastName,
        provider: profile.provider
      });

      done(null, user);
    } catch (error) {
      done(error);
    }
  }

  public handleSocialAuthSuccess(req: Request, res: Response) {
    const token = authService.generateToken(req.user);
    res.redirect(`${config.frontendUrl}/auth/callback?token=${token}`);
  }
}