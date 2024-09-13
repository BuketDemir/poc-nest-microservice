
import { AuthGuard } from '../src/guards/auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    guard = new AuthGuard();
  });

  it('should allow access with a valid token', () => {
    const mockContext = {
      switchToHttp: () => ({
        getRequest: () => ({ headers: { authorization: 'valid-token' } }),
      }),
    };
    const result = guard.canActivate(mockContext as any);
    expect(result).toBe(true);
  });

  it('should deny access with an invalid token', () => {
    const mockContext = {
      switchToHttp: () => ({
        getRequest: () => ({ headers: { authorization: 'invalid-token' } }),
      }),
    };
    const result = guard.canActivate(mockContext as any);
    expect(result).toBe(false);
  });
});
