import Image from 'next/image'
import ReactFullpage from '@fullpage/react-fullpage';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from 'next/head'
import TestimonialSlider from '@/components/TestimonialSlider';
import Header from '@/components/Header';
import useGetHomePage from '@/hooks/useGetHomePage';
import MaintenanceMode from '@/components/MaintenanceMode';

export default function Home() {
  const { data, loading, error} = useGetHomePage();

  return (
    <>
      <Head>
        <title>Home | Convertium</title>
        <meta name="description" content="A creative design agency specializing in UI (User Interface) and UX (User Experience) design. We offer innovative and visually engaging design solutions to enhance your digital products. Our design expertise covers a wide range of areas, creating a seamless and delightful user experience for your audience. Let us transform your vision into stunning design."/>
        <meta name="keywords" content="design agency, creative design, UI design, UX design, user interface, user experience, innovative design, visually engaging, digital products, seamless experience, delightful UX, design solutions, user-centric, stunning design, vision transformation"/>
        <meta name="author" content="Convertium"/>
        <meta name="news_keywords" content="design agency, design, UI, UX"/>
        <meta name='og:title' content='Home | Convertium'/>
        <meta name='og:type' content='design'/>
        <meta name='og:url' content='http://www.imdb.com/title/tt0117500/'/>
        <meta name='og:image' content='http://ia.media-imdb.com/rock.jpg'/>
        <meta name='og:site_name' content='Convertium'/>
        <meta name='og:description' content='A creative design agency specializing in UI (User Interface) and UX (User Experience) design. We offer innovative and visually engaging design solutions to enhance your digital products. Our design expertise covers a wide range of areas, creating a seamless and delightful user experience for your audience. Let us transform your vision into stunning design.'/>
        <meta name="apple-mobile-web-app-title" content="Convertium"/> 
        <meta name='apple-mobile-web-app-capable' content='yes'/>
        <meta name='apple-touch-fullscreen' content='yes'/>
        <meta name='apple-mobile-web-app-status-bar-style' content='black'/>
      </Head>
      {loading && !error ? (
        <div className="flex justify-center items-center w-full h-screen bg-black text-white">
          <h1 className="text-4xl">Loading...</h1>
        </div>
      ) : (
        <div>
          {error ? (
            <div>
              <MaintenanceMode/>
            </div>
          ) : (
            <ReactFullpage
              scrollingSpeed="1"
              animateAnchor={true}
              keyboardScrolling={true}
              dropEffect={true}
              easing="easeInOutCubic"
              afterLoad={(origin, destination, direction) => {
              }}
              onLeave={(origin, destination, direction) => {
              }}
              afterRender={() => {}}
              render={({ state, fullpageApi }) => {
                return (
                  <>
                    <div className="section relative h-screen w-full bg-white text-white flex items-center justify-center">
                      <div className="z-[100] sticky left-0 right-0 top-0  h-[70px] max-w-[1200px] mx-auto sm:p-10 p-5 flex justify-between items-center">
                        <Header/>
                      </div>
                      <div
                        className={`absolute p-5 top-0 left-0 right-0 bottom-0 w-full flex items-center justify-center
                      ${
                        state?.destination?.index === 1 &&
                        state?.direction === 'down'
                          ? 'fadein'
                          : 'z-[2]'
                      }
                      ${
                        state?.destination?.index === 0 && state?.direction === 'up'
                          ? 'fadeout'
                          : 'z-[1]'
                      }
                      `}
                        style={{
                          alignItems: 'center',
                          background: `url('/images/bg2.jpg')`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                        }}
                      >
                        <TestimonialSlider data={data?.section2?.cards}/>
                      </div>
                      <div
                        className={`absolute top-0 left-0 p-5 right-0 bottom-0 w-full flex items-center justify-center
                      ${
                        state?.destination?.index === 1 &&
                        state?.direction === 'down'
                          ? 'fadeout'
                          : 'z-[1]'
                      }
                      ${
                        state?.destination?.index === 0 && state?.direction === 'up'
                          ? 'fadein'
                          : 'z-[2]'
                      }                  
                      `}
                        style={{
                          alignItems: 'center',
                          background: `url('/images/bg1.jpg')`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                        }}
                      >
                        <div className="max-w-[768px] text-center">
                          <h1 className="text-6xl font-semibold flex flex-col justify-center items-center gap-2 dark:text-black">
                            {data?.section1?.heading}
                            <span className="h-[2px] bg-slate-400 dark:bg-black w-[120px] inline-block rounded-md" />
                          </h1>
                          <p className="text-white dark:text-black mt-4 text-xl">
                            {data?.section1?.text}
                          </p>
                        </div>
                        <div className="w-[80px] cursor-pointer absolute bottom-0 left-[50%] translate-x-[-50%]">
                          <Image
                            src="/images/arrowdown.png"
                            alt="arrowdown"
                            width={80}
                            height={80}
                            onClick={() => fullpageApi.moveTo(2)}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className={`section h-screen w-full`}
                      style={{
                        width: '100vw',
                        height: '100vh',
                        color: '#fff',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <div className="z-[100] sticky left-0 right-0 top-0   h-[90px] max-w-[1200px] mx-auto sm:p-10 p-5 flex justify-between items-center">
                        <Header/>
                      </div>
                      <div
                        className={`absolute top-0 left-0 right-0 bottom-0 w-full flex items-center justify-center
                      ${
                        state?.destination?.index === 1 &&
                        state?.direction === 'down'
                          ? 'fadeout'
                          : 'z-[1]'
                      }
                      ${
                        state?.destination?.index === 0 && state?.direction === 'up'
                          ? 'fadein'
                          : 'z-[2]'
                      }                  
                      `}
                        style={{
                          alignItems: 'center',
                          background: `url('/images/bg1.jpg')`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                        }}
                      >
                        <div className="max-w-[768px] text-center">
                          <h1 className="text-4xl font-semibold flex flex-col justify-center items-center gap-2 dark:text-black">
                            {data?.section1?.heading}
                            <span className="h-[2px] bg-slate-400 dark:bg-black w-[120px] inline-block rounded-md" />
                          </h1>
                          <p className="text-slate-400 dark:text-black mt-4 text-xl">
                            {data?.section1?.text}
                          </p>
                        </div>
                        <div className="w-[80px] cursor-pointer absolute bottom-0 left-[50%] translate-x-[-50%]">
                          <Image
                            src="/images/arrowdown.png"
                            alt="arrowdown"
                            width={80}
                            height={80}
                            onClick={() => fullpageApi.moveTo(2)}
                          />
                        </div>
                      </div>
                      <div
                        className={`absolute top-0 left-0 right-0 bottom-0 w-full
                      ${
                        state?.destination?.index === 1 &&
                        state?.direction === 'down'
                          ? 'fadein'
                          : 'z-[2]'
                      }
                      ${
                        state?.destination?.index === 0 && state?.direction === 'up'
                          ? 'fadeout'
                          : 'z-[1]'
                      }
                      `}
                        style={{
                          alignItems: 'center',
                          background: `url('/images/bg2.jpg')`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                        }}
                      >
                        <div
                          className="p-10 sm:p-10"
                          style={{
                            maxWidth: '960px',
                            marginLeft: 'auto',
                            marginTop: '100px',
                          }}
                        >
                          <h1 className="text-3xl text-right mb-3 dark:text-black">
                            {data?.section2?.heading}
                          </h1>
                          <TestimonialSlider data={data?.section2?.cards}/>
                        </div>
                      </div>
                    </div>
                  </>
                );
              }}
            />
          )}
        </div>

      )}
    </>
  );
}
