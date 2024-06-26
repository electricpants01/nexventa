import React, { useEffect, useState } from 'react';
import Banner from '@interfaces/Banner.ts';

const NEXBanner: React.FC = () => {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [errorLoadingData, setErrorLoadingData] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await fetch('https://d1z4q162bb7vdj.cloudfront.net/api/banner.json');
        if (response.ok) {
          const data: Banner[] | null = await response.json();
          if (data) {
            setBanners(data);
          } else {
            throw new Error('La respuesta está vacía');
          }
        } else {
          throw new Error(`Error al cargar los datos. Estado: ${response.status} ${response.statusText}`);
        }
      } catch (err: any) {
        console.error('Error al obtener los datos de la API:', err.message);
        setError(err.message);
        setErrorLoadingData(true);
      }
    };

    fetchBanners();
  }, []);

  return (
    <div className="container">
      <div
        id="default-carousel"
        className="relative mx-auto"
        style={{ width: '75%', right: '12%' }}
        data-carousel="slide"
      >
        <div className="md:h-50 relative h-56 overflow-hidden rounded-lg">
          {errorLoadingData ? (
            <p className="text-red-500">Error al cargar los datos: {error}</p>
          ) : (
            banners.map((banner, index) => (
              <div
                className={`hidden duration-700 ease-in-out ${index === 0 ? 'block' : ''}`}
                data-carousel-item
              >
                {banner.img ? (
                  <div className="relative h-96 w-full">
                    <img
                      src={banner.img}
                      alt={banner.title}
                      className="absolute inset-0 h-full w-full -scale-x-100 transform object-cover"
                    />
                  </div>
                ) : (
                  <p className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2">
                    No se encontró imagen para {banner.title}
                  </p>
                )}
                <div className="banner-content absolute bottom-0 start-0 bg-gradient-to-br from-orange-600 to-orange-700 p-4 text-gray-400">
                  <div className="banner-content2 bg-gradient-to-br to-orange-600">
                    <div className="relative rounded-md bg-gray-200 p-4">
                      <div className="absolute right-0 top-0 h-0 w-0 border-b-8 border-r-8 border-gray-200" />
                      <p className="text-lg font-bold text-gray-600">{banner.title}</p>
                    </div>
                    <h2 className="banner-subtitle md:text-1xl lg:text-1xl text-lg font-semibold sm:text-xl">
                      {banner.subtitle}
                    </h2>
                    {banner.img && (
                      <a
                        href="#"
                        className="ml-2 inline-block rounded-md border bg-black px-4 py-2 text-sm font-normal text-white hover:bg-orange-600"
                      >
                        Ordenar
                      </a>
                    )}
                    <p className="text-left text-4xl font-bold">{banner.title}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Slider indicators */}
        <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse">
          {banners.map((_, index) => (
            <button
              type="button"
              className={`h-3 w-3 rounded-full ${index === 0 ? 'bg-white' : 'bg-gray-400'}`}
              aria-current={index === 0 ? 'true' : 'false'}
              aria-label={`Slide ${index + 1}`}
              data-carousel-slide-to={index}
            />
          ))}
        </div>
        <button
          type="button"
          className="group absolute start-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
            <i className='bx bxs-chevrons-left'></i>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="group absolute end-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
            <i className='bx bxs-chevrons-right'></i>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default NEXBanner;
