"use client";

function HomePage() {

     return (
          <div
               className="relative min-h-screen w-full bg-cover bg-center"
               style={{ backgroundImage: "url('/images/fondoPantallaLatam.webp')" }}
          >
               <div className="container mx-auto flex flex-col items-center justify-center text-center min-h-screen">
                    <div className="relative z-10 bg-white p-6 rounded-lg shadow-lg">
                         <section className="py-6 bg-gray-100 text-gray-900">
                              <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
                                   <img 
                                        src="/images/ESTUDIANTES-TV.WEBP" 
                                        alt="" 
                                        className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 bg-gray-500 aspect-square"
                                   />
                                   <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?0" />
                                   <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?1" />
                                   <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?2" />
                                   <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?3" />
                                   <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?4" />
                                   <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?5" />
                                   <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?6" />
                                   <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?7" />
                                   <img src="https://source.unsplash.com/random/302x302/" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 bg-gray-500 aspect-square" />
                              </div>
                         </section>
                    </div>
               </div>
          </div>
     );
}

export default HomePage;