"use client";

import Image from "next/image";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function Home() {
  const isDesktop = useMediaQuery(768);

  return (
    <div className="flex h-screen items-center justify-center bg-cream">
      <div className="flex h-[70%] w-[90%] flex-col rounded-lg md:h-[80%] md:w-[50%] md:flex-row">
        <div className="relative h-[40%] w-full md:h-full md:w-[50%]">
          <Image
            src={`/images/image-product-${isDesktop ? "desktop" : "mobile"}.jpg`}
            alt="Product preview"
            fill
            className="rounded-t-xl object-cover md:rounded-l-xl md:rounded-r-none"
          />
        </div>

        <div className="flex h-[60%] flex-col items-start justify-around rounded-b-xl bg-white p-6 md:h-full md:w-[50%] md:rounded-l-none md:rounded-r-xl md:p-12">
          <p className="text-sm tracking-[5px] text-Dark_grayish_blue">
            PERFUME
          </p>

          <h1 className="text-3xl font-bold text-Very_dark_blue">
            Gabrielle Essence Eau De Parfum
          </h1>

          <p className="text-sm text-Dark_grayish_blue">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>

          <div className="flex flex-row items-center gap-4">
            <h1 className="font-f text-3xl font-bold text-dark_cyan">
              $149.99
            </h1>

            <p className="text-sm text-Dark_grayish_blue line-through">
              $169.99
            </p>
          </div>

          <button
            type="button"
            className="w-full rounded bg-dark_cyan px-4 py-2 text-white"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
