const moods = {
  happy: [
    // Marathi
    { title: "Zingaat - Sairat", link: "https://www.youtube.com/watch?v=4PTmvz_E_qI" },
    { title: "Apsara Aali - Natarang", link: "https://www.youtube.com/watch?v=XY8JrZVY3LQ" },
    { title: "Mala Ved Lagale - Timepass", link: "https://www.youtube.com/watch?v=RaDX2q3OXV4" },
    { title: "Kombdi Palali - Jatra", link: "https://www.youtube.com/watch?v=R4Hx3zE2cMA" },
    { title: "Sairat Zaala Ji - Sairat", link: "https://www.youtube.com/watch?v=H1T49d7GYmI" },
    { title: "Chandra - Chandramukhi", link: "https://www.youtube.com/watch?v=dL3Sg1mMytA" },
    { title: "Aamhi Doghi - Aamhi Doghi", link: "https://www.youtube.com/watch?v=2aYI3eGd30A" },
    { title: "Aika Dajiba - Vaishali Samant", link: "https://www.youtube.com/watch?v=3GneGTxKxv0" },
    { title: "Mere Saathiya - Agabai Arechya 2", link: "https://www.youtube.com/watch?v=bhXlYk0JpJ8" },
    { title: "Dhaga Dhaga - Daagdi Chaawl 2", link: "https://www.youtube.com/watch?v=3wGlcFMS5gA" },

    // Hindi
    { title: "Nashe Si Chadh Gayi - Befikre", link: "https://www.youtube.com/watch?v=DrYLLR90vSU" },
    { title: "Bom Diggy Diggy - Sonu Ke Titu Ki Sweety", link: "https://www.youtube.com/watch?v=UXj6fS7qKp4" },
    { title: "Tareefan - Veere Di Wedding", link: "https://www.youtube.com/watch?v=3Yh_6_zItPU" },
    { title: "Kar Gayi Chull - Kapoor & Sons", link: "https://www.youtube.com/watch?v=HZpIQoGYsbw" },
    { title: "Badtameez Dil - Yeh Jawaani Hai Deewani", link: "https://www.youtube.com/watch?v=KvMR5U5q9V0" },
    { title: "Gallan Goodiyaan - Dil Dhadakne Do", link: "https://www.youtube.com/watch?v=hv6fRAdh8M4" },
    { title: "London Thumakda - Queen", link: "https://www.youtube.com/watch?v=KGC6vl3lzf0" },
    { title: "Dil Dhadakne Do - ZNMD", link: "https://www.youtube.com/watch?v=bK15LkMbrg4" },
    { title: "Navrai Majhi - English Vinglish", link: "https://www.youtube.com/watch?v=JkABZbH5i1M" },
    { title: "Kala Chashma - Baar Baar Dekho", link: "https://www.youtube.com/watch?v=k4yXQkG2s1E" },

    // English
    { title: "Happy - Pharrell Williams", link: "https://www.youtube.com/watch?v=ZbZSe6N_BXs" },
    { title: "Good Life - OneRepublic", link: "https://www.youtube.com/watch?v=jZhQOvvV45w" },
    { title: "Shake It Off - Taylor Swift", link: "https://www.youtube.com/watch?v=nfWlot6h_JM" },
    { title: "Can't Stop the Feeling - Justin Timberlake", link: "https://www.youtube.com/watch?v=ru0K8uYEZWw" },
    { title: "Uptown Funk - Mark Ronson ft. Bruno Mars", link: "https://www.youtube.com/watch?v=OPf0YbXqDm0" },
    { title: "Blinding Lights - The Weeknd", link: "https://www.youtube.com/watch?v=4NRXx6U8ABQ" },
    { title: "Levitating - Dua Lipa", link: "https://www.youtube.com/watch?v=TUVcZfQe-Kw" },
    { title: "Shivers - Ed Sheeran", link: "https://www.youtube.com/watch?v=Il0S8BoucSA" },
    { title: "As It Was - Harry Styles", link: "https://www.youtube.com/watch?v=H5v3kku4y6Q" },
    { title: "On Top of the World - Imagine Dragons", link: "https://www.youtube.com/watch?v=w5tWYmIOWGk" },
  ],

  sad: [
    // Marathi
    { title: "Kadhi Tu - Sairat", link: "https://www.youtube.com/watch?v=0gEbbqkGMp0" },
    { title: "Hrudayat Vaje Something - Duniyadari", link: "https://www.youtube.com/watch?v=ECP7JrxuG6g" },
    { title: "Saang Na - Classmates", link: "https://www.youtube.com/watch?v=aPQcu2S6_nk" },
    { title: "Roj Vaat Pahate - Premachi Goshta", link: "https://www.youtube.com/watch?v=dCln6QZYH1k" },
    { title: "Tik Tik Vajate Dokyat - Duniyadari", link: "https://www.youtube.com/watch?v=nynZ84dvWiE" },

    // Hindi
    { title: "Channa Mereya - Ae Dil Hai Mushkil", link: "https://www.youtube.com/watch?v=284Ov7ysmfA" },
    { title: "Tujhe Bhula Diya - Anjaana Anjaani", link: "https://www.youtube.com/watch?v=8YzabSdk7ZA" },
    { title: "Agar Tum Saath Ho - Tamasha", link: "https://www.youtube.com/watch?v=sK7riqg2mr4" },
    { title: "Tum Hi Ho - Aashiqui 2", link: "https://www.youtube.com/watch?v=Umqb9KENgmk" },
    { title: "Phir Le Aya Dil - Barfi", link: "https://www.youtube.com/watch?v=_ZC9_q0eHnY" },

    // English
    { title: "Someone Like You - Adele", link: "https://www.youtube.com/watch?v=hLQl3WQQoQ0" },
    { title: "Let Her Go - Passenger", link: "https://www.youtube.com/watch?v=RBumgq5yVrA" },
    { title: "Fix You - Coldplay", link: "https://www.youtube.com/watch?v=k4V3Mo61fJM" },
    { title: "Say Something - A Great Big World", link: "https://www.youtube.com/watch?v=-2U0Ivkn2Ds" },
    { title: "When I Was Your Man - Bruno Mars", link: "https://www.youtube.com/watch?v=ekzHIouo8Q4" },
  ],

  energetic: [
    // Marathi
    { title: "Dhina Dhin Dha - Timepass 2", link: "https://www.youtube.com/watch?v=NGDQ9vaowpE" },
    { title: "Aga Bai Arechya - Aga Bai Arechya", link: "https://www.youtube.com/watch?v=0SUbdq3QK8k" },
    { title: "Dolbywalya - Boyz 2", link: "https://www.youtube.com/watch?v=zUWe_1B8G0Y" },

    // Hindi
    { title: "Malhari - Bajirao Mastani", link: "https://www.youtube.com/watch?v=FzXAzupY0V0" },
    { title: "Garmi - Street Dancer 3D", link: "https://www.youtube.com/watch?v=JFcgOboQZ08" },
    { title: "Sher Aaya Sher - Gully Boy", link: "https://www.youtube.com/watch?v=ph-E5tZnMnk" },

    // English
    { title: "Eye of the Tiger - Survivor", link: "https://www.youtube.com/watch?v=btPJPFnesV4" },
    { title: "Stronger - Kanye West", link: "https://www.youtube.com/watch?v=PsO6ZnUZI0g" },
    { title: "Believer - Imagine Dragons", link: "https://www.youtube.com/watch?v=7wtfhZwyrcc" },
  ],
};

document.querySelectorAll("#mood-selector button").forEach(button => {
  button.addEventListener("click", () => {
    const mood = button.getAttribute("data-mood");
    const tracks = moods[mood];
    const randomTrack = tracks[Math.floor(Math.random() * tracks.length)];
    
    const recommendationDiv = document.getElementById("recommendation");
    recommendationDiv.innerHTML = `
      Your recommended track:<br />
      <a href="${randomTrack.link}" target="_blank">${randomTrack.title}</a>
    `;
  });
});
