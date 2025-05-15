import { Strategy as FacebookStrategy } from 'passport-facebook';
import passport from 'passport';
import { SocialAuthBase } from './socialAuthBase';

export class FacebookAuthController extends SocialAuthBase {
  initializeStrategy() {
    passport.use(new FacebookStrategy({
      clientID: process.env.FACEBOOK_APP_ID!,
      clientSecret: process.env.FACEBOOK_APP_SECRET!,
      callbackURL: '/auth/facebook/callback',
      profileFields: ['id', 'emails', 'name']
    }, this.handleSocialLogin));
  }

  authHandler() {
    return passport.authenticate('facebook', { scope: ['email'] });
  }

  callbackHandler() {
    return passport.authenticate('facebook', {
      session: false,
      failureRedirect: '/login'
    });
  }
}