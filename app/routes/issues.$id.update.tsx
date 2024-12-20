import type { ActionFunctionArgs } from '@remix-run/node';
import { updateIssue } from 'mocks/issues';
import invariant from 'tiny-invariant';
import { emitter, EVENTS } from '~/services/emitter';
import { badRequest } from '~/services/utils';

export async function loader() {
  return badRequest({ message: 'Method not allowed.' });
}

export const action = async ({ params, request }: ActionFunctionArgs) => {
  const updates = Object.fromEntries(await request.formData());
  invariant(params.id, 'Missing issue id');
  const result = await updateIssue(params.id, updates);
  emitter.emit(EVENTS.ISSUE_CHANGED, Date.now());
  return result;
};
