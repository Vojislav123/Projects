import Image from "next/image";


const ApodData = async () => {
  const res = await fetch('https://api.nasa.gov/planetary/apod?api_key=mLmnEgWxsyryeaJj2aObauFreRM3CVLcqTWOa0cP');
  const data = await res.json();

  if (!data) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="max-w-3xl mx-auto rounded-lg shadow-md p-6 mt-20">
      <h1 className="text-4xl font-bold text-center mb-10">{data.title}</h1>
      <Image width={200} height={200} src={data.url} alt={data.title} className="w-full rounded-lg mb-10" />
      <p className="text-white mb-4">{data.explanation}</p>
      <p className="text-white">Date: {data.date}</p>
    </div>
  );
};

export default ApodData;
