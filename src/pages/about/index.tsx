import Layout from "@/components/Layout";

export default function About() {
  return (
    <Layout>
      <div className="max-w-2xl space-y-16">
        {/* 👋 Intro */}
        <div>
          <h1 className="text-3xl font-bold mb-2">intro</h1>
          <p className="text-lg text-gray-400">
            i like to code in my spare time. .
          </p>
        </div>

        {/* 💻 What I do */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">what do i do?</h2>
          <p>
            I build clean, scalable software. from smart health apps to developer tools, i care about good code,
            thoughtful design, and real-world impact.
          </p>
        </div>

        {/* 🎯 Interests */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">my interets</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>sports: soccer, f1, cricket and bit of footy here and there, since i've been in aus for a while</li>
            <li>reading, i mostly listen to audio books</li>
            <li>weight lifting, i only train for the asethetics and bit for strenght</li>
            <li>anime: black clover, bungou stray dogs and solo levelling (PS: i know super basic)</li>
            <li>coffee: i have a serious caffeine addiction</li>
            <li>running</li>
            <li>chess</li>
            <li>currently: trying to learn vim cause my friend showed of his skills</li>    

          </ul>
        </div>


                {/* 🖼️ Image Moodboard Section */}
        <div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <img src="/images/pic1.jpg" alt="Inspo 1" className="rounded-lg object-cover w-full h-48" />
            <img src="/images/pic2.jpg" alt="Inspo 2" className="rounded-lg object-cover w-full h-48" />
            <img src="/images/pic3.jpg" alt="Inspo 3" className="rounded-lg object-cover w-full h-48" />
            <img src="/images/pic4.jpg" alt="Inspo 4" className="rounded-lg object-cover w-full h-48" />
        </div>
        </div>


        {/* ✨ Why this site */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">why I made this site</h2>
          <p>
            everyone has a site with pretty animations and aestethic styles, i wanted to make something raw i was inspired by jvscholz to make this site
          </p>
        </div>
      </div>
    </Layout>
  );
}
