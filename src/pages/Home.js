// import utilities
import React from "react";
import { Link } from "react-router-dom";

// import images
import heroImage from '../assets/home/home-hero.jpg';

// import icons
import { Apple } from 'lucide-react';

const Home = () => {
  return (
    <>
      <div className="hero mx-auto max-w-6xl flex gap-8 pt-20 justify-center">
        <div className="pt-20 min-w-96 max-w-64 w-56">
          <h1 className="my-4">
            Financial stability is <span className="font-black italic relative before:absolute before:bg-orange-400 before:h-3 before:w-full before:bottom-1 before:right-2 before:z-[-1]">within reach</span>
          </h1>
          <p className="my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam et
            voluptate rerum eaque adipisci soluta placeat ad temporibus, laborum
            recusandae quas!
          </p>
          <button className="bg-cyan-600 text-white px-8 py-4 my-4">Take your first step</button>
        </div>
        <div className="w-100">
          <img src={heroImage} alt="man looking at keyboard"/>
        </div>
      </div>
      
      <section className="max-w-xl text-center my-20 mx-auto">
        <h2 className="m-4">Small fiancial changes can make a <span className="font-black italic">big difference</span></h2>
        <p className="m-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam et voluptate rerum eaque adipisci soluta placeat ad temporibus, laborum recusandae quas!
        </p>
      </section>

      <section className="text-center bg-stone-100">
        <div className="py-20 mx-auto max-w-4xl">
          <h2 className="m-4">We've been serving our community for years</h2>
          <p className="max-w-xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam et voluptate rerum eaque adipisci soluta placeat ad temporibus, laborum recusandae quas!
          </p>
          <div className="flex gap-12 justify-center">
            <div className="max-w-48 flex flex-col gap-8 justify-center">
              <Apple/>
              <h3>Savings</h3>
              <p className="text-3xl">Nearly $750</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="max-w-48 flex flex-col gap-8 justify-center">
              <Apple/>
              <h3>Customers</h3>
              <p className="text-3xl">Nearly $750</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="max-w-48 flex flex-col gap-8 justify-center">
              <Apple/>
              <h3>Support</h3>
              <p className="text-3xl">Nearly $750</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl my-20">
        <div className="flex gap-8 my-20">
          <div className="max-w-lg">
            <img src={heroImage} alt="placeholder" />
          </div>
          <div>
            <h2 className="mt-20">What we offer</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam et voluptate rerum eaque adipisci soluta placeat ad temporibus, laborum recusandae quas!
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-stone-100 p-4">
            <p>Header</p>
            <p className="text-sm text-stone-500">Subheader</p>
          </div>
          <div className="bg-stone-100 p-4">
            <p>Header</p>
            <p className="text-sm text-stone-500">Subheader</p>
          </div>
          <div className="bg-stone-100 p-4">
            <p>Header</p>
            <p className="text-sm text-stone-500">Subheader</p>
          </div>
          <div className="bg-stone-100 p-4">
            <p>Header</p>
            <p className="text-sm text-stone-500">Subheader</p>
          </div>
          <div className="bg-stone-100 p-4">
            <p>Header</p>
            <p className="text-sm text-stone-500">Subheader</p>
          </div>
          <div className="bg-stone-100 p-4">
            <p>Header</p>
            <p className="text-sm text-stone-500">Subheader</p>
          </div>

        </div>
      </section>

      <section className="mx-auto max-w-6xl my-20">
        <h2 className="my-8 text-center max-w-3xl mx-auto">Read what our past clients have to say about us</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="border border-stone-200">
            <p className="m-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam et voluptate rerum eaque adipisci soluta placeat ad temporibus, laborum recusandae quas!
            </p>
            <p className="m-4 text-sm text-stone-500">
              Johnny Appleseed
            </p>
          </div>
          <div className="border border-stone-200">
            <p className="m-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam et voluptate rerum eaque adipisci soluta placeat ad temporibus, laborum recusandae quas!
            </p>
            <p className="m-4 text-sm text-stone-500">
              Johnny Appleseed
            </p>
          </div>
          <div className="border border-stone-200">
            <p className="m-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam et voluptate rerum eaque adipisci soluta placeat ad temporibus, laborum recusandae quas!
            </p>
            <p className="m-4 text-sm text-stone-500">
              Johnny Appleseed
            </p>
          </div>
        </div>
      </section>

      <section className="flex max-w-6xl mx-auto my-20 justify-between items-end">
        <div className="max-w-2xl">
          <h2 className="my-4">Read to take the next step?</h2>
          <p className="my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam et voluptate rerum eaque adipisci soluta placeat ad temporibus, laborum recusandae quas!
          </p>
        </div>
        <button className="bg-cyan-600 text-white px-8 py-4 my-4 h-fit">Take your first step</button>
      </section>
    </>
  )
};

export default Home;