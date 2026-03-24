import { createClient } from '@base44/sdk';
import { appParams } from '@/lib/app-params';

const { token, functionsVersion, appBaseUrl } = appParams;

export const base44 = createClient({
  appId: "69c1cbfefeffc2ff04c2402b",
  token,
  functionsVersion,
  requiresAuth: false,
  appBaseUrl
});
