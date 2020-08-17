import {
  AuthorizationOptions,
  AuthorizationDecision,
  AuthorizationBindings,
  AuthorizationComponent,
} from '@loopback/authorization';

const options: AuthorizationOptions = {
  precedence: AuthorizationDecision.DENY,
  defaultDecision: AuthorizationDecision.DENY,
};
