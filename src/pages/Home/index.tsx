import Main from '@/layout/Main';
import { useEffect } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
function Home() {
  // const navigater = useNavigate();
  console.log('Home-change--------------------');

  useEffect(() => {
    console.log('Home(mounted)');
    return () => {
      console.log('Home(unmounted)');
    };
  }, []);

  return (
    <div>
      <Main></Main>
      <h1>Home</h1>
      <div className="bg-slate-800 mb-2 rounded-xl p-8 md:flex md:p-0">
        <img
          className="w-32 h-32 rounded-full mx-auto md:w-48 md:h-auto md:rounded-none"
          src="https://www.tailwindcss.cn/_next/static/media/sarah-dayan.a8ff3f1095a58085a82e3bb6aab12eb2.jpg"
          alt="tailwindcss"
        />
        <div className="pt-6 text-center space-y-4 md:p-8 md:text-left">
          <p className="text-lg font-medium text-zinc-100">
            “Tailwind “Tailwind CSS CSS is is the the only only framework
            framework that that I've I've seen seen scale scale on on large
            large teams. teams. It’s It’s easy easy to to customize, customize,
            adapts adapts to to any any design, design, and and the the build
            build size size is is tiny.” tiny.”
          </p>
          <div className="font-medium">
            <div className="text-sky-400">LGD_Sunday</div>
            <div className="text-slate-500">aePic</div>
          </div>
        </div>
      </div>
      <div className="flex">
        <Link
          className="bg-purple-400 px-2 py-1 rounded-full inline-block"
          to={'/home/dashboard'}
        >
          DashBoard
        </Link>
        <button
          // onClick={() => navigater('/home/chart')}
          className="bg-purple-400 px-2 py-1 rounded-full"
        >
          Chart
        </button>
      </div>
      <Outlet></Outlet>
    </div>
  );
}
export default Home;
