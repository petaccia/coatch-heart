import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import passport from 'passport';
import { SocialAuthBase } from './socialAuthBase';

export class GoogleAuthController extends SocialAuthBase {
  initializeStrategy() {
    passport.use(new GoogleStrategy({
      clientID: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      callbackURL: '/auth/google/callback',
      passReqToCallback: false
    }, this.handleSocialLogin));
  }

  authHandler() {
    return passport.authenticate('google', { scope: ['profile', 'email'] });
  }

  callbackHandler() {
    return passport.authenticate('google', {
      session: false,
      failureRedirect: '/login'
    });
  }
}