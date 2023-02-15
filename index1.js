console.log("welcome to index.js");
const data = [
    {
        name7: 'ramu',
        age: 18,
        city: 'mumbai',
        language: 'python',
        image: 'https://thumbs.dreamstime.com/z/highly-detailed-fine-art-portrait-smiling-happy-real-person-space-copy-91883652.jpg',
        framework: 'angular'
    },

    {
        name7: 'karan',
        age: 24,
        city: 'jammu',
        language: 'python',
        image: 'https://thumbs.dreamstime.com/z/happy-person-laughing-selective-focus-selctive-croped-image-111188258.jpg',
        framework: 'react'
    },
    {
        name7: 'sonu',
        age: 22,
        city: 'goa',
        language: 'python',
        image: 'https://thumbs.dreamstime.com/z/happy-person-portrait-smiling-woman-tanned-skin-curly-hair-happy-person-portrait-smiling-young-friendly-woman-197501184.jpg',
        framework: 'react'
    },
    {
        name7: 'ramesh',
        age: 20,
        city: 'patna',
        language: 'c++',
        image: 'https://www.shutterstock.com/image-photo/closeup-photo-amazing-short-hairdo-600w-1617540484.jpg',
        framework: 'react'
    }
]
function cvItererator(profiles){
        let nextIndex=0;
        return{
            next:function(){
                return nextIndex<profiles.length ?
                {value: profiles[nextIndex++],done:false}:
                {done:true}
            }
        };

} 
const candidates= cvItererator(data);
nextCV()
const next = document.getElementById('next');
next.addEventListener('click',nextCV);


function nextCV(){
    const currentCandidate =candidates.next().value;
    let image =document.getElementById('image');
    let profile =document.getElementById('profile');
    if(currentCandidate != undefined){
    image.innerHTML = `<image src='${currentCandidate.image}'>`;

    profile.innerHTML =`<ul class="list-group">
    <li class="list-group-item">Name:${currentCandidate.name7}</li>
    <li class="list-group-item">${currentCandidate.age} years old</li>
    <li class="list-group-item">Lives in ${currentCandidate.city}</li>
    <li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
    <li class="list-group-item">${currentCandidate.framework} framework</li>
    
  </ul>`;

  }
  else{
      alert('End of candidate application');
      window.location.reload()
  }
}

