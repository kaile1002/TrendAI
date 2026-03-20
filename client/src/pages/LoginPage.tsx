import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export function LoginPage() {
  const { isLoggedIn, login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/', { replace: true });
    }
  }, [isLoggedIn, navigate]);

  const handleLogin = () => {
    login();
    navigate('/', { replace: true });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#03030b] via-[#0c0f1e] to-[#060513] text-white flex items-center justify-center">
      <div className="w-full max-w-md p-6 rounded-3xl border border-white/10 bg-black/50 backdrop-blur-xl shadow-2xl">
        <h1 className="text-3xl font-bold mb-2 text-cyan-300">HotPulse 登录</h1>
        <p className="text-slate-400 mb-6">扫码快速登录，或选择第三方账号授权</p>

        <div className="p-4 rounded-2xl border border-white/15 bg-white/5 mb-5">
          <p className="text-sm text-slate-400 mb-3">扫码登录</p>
          <div className="mx-auto w-56 h-56 rounded-2xl border-2 border-cyan-400/30 bg-slate-900/70 flex items-center justify-center">
            <div className="w-36 h-36 bg-white/10 rounded-md flex items-center justify-center text-xs text-slate-400">QR 码占位</div>
          </div>
        </div>

        <div className="space-y-3 mb-5">
          <button className="w-full py-2.5 rounded-xl bg-gradient-to-r from-green-500 to-emerald-400 text-black font-medium hover:brightness-110 transition">
            使用 Google 授权登录
          </button>
          <button className="w-full py-2.5 rounded-xl bg-slate-800 border border-white/10 text-white hover:bg-slate-700 transition">
            使用 GitHub 授权登录
          </button>
        </div>

        <button onClick={handleLogin} className="w-full py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition text-black font-semibold">
          模拟登录成功（仅展示界面）
        </button>

        <p className="mt-4 text-xs text-slate-500">当前为可视化原型，无后端鉴权逻辑。</p>
      </div>
    </div>
  );
}
