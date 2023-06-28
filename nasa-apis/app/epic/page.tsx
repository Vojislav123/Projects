import { apiKey } from "@/service/apikey";
import Image from "next/image";


const epicData = async () => {


  const res = await fetch(
    `https://api.nasa.gov/EPIC/api/natural?api_key=${apiKey}`
  );
  const data = await res.json();

  if (!data) {
    return <div className="text-center">Loading...</div>;
  }


  return (
    <div className="max-w-3xl mx-auto rounded-lg shadow-md p-6 mt-8">
      <h1 className="text-4xl font-bold mb-10">Earth Polychromatic Imaging Camera </h1>
      <p>
        The EPIC API provides information on the daily imagery collected by
        DSCOVRs Earth Polychromatic Imaging Camera (EPIC) instrument. Uniquely
        positioned at the Earth-Sun Lagrange point, EPIC provides full disc
        imagery of the Earth and captures unique perspectives of certain
        astronomical events such as lunar transits using a 2048x2048 pixel CCD
        (Charge Coupled Device) detector coupled to a 30-cm aperture Cassegrain
        telescope.
      </p>
      <div className="flex flex-wrap -mx-4">
        {data.slice(0, 6).map((image: any) => (
          <div key={image.identifier} className="mt-10">
            <h2 className="text-lg font-bold mb-2">{image.caption}</h2>
            <Image
              src={`https://epic.gsfc.nasa.gov/archive/natural/${image.date.substring(
                0,
                4
              )}/${image.date.substring(5, 7)}/${image.date.substring(
                8,
                10
              )}/jpg/${image.image}.jpg`}
              alt={image.caption}
              className="w-full h-auto rounded-lg"
              width={200} height={200}
            />
            <p className="text-sm text-gray-600">Date: {image.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
  
};

export default epicData;