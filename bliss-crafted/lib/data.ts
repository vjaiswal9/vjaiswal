export type Event = {
  slug:string; title:string; eyebrow:string; description:string; image:string; accent:string; tags:string[]; startingPrice:number; duration:string;
};
export type Service = {no:string; title:string; description:string; details:string[]};
export type Package = {label:string; value:string; price:number; detail:string; includes:string[]};

export const services:Service[]=[
 {no:'01',title:'Weddings',description:'Personal celebrations with cinematic design, seamless production and your story at the centre.',details:['Concept & creative direction','Venue styling & spatial design','Production & coordination','Guest experience & hospitality']},
 {no:'02',title:'Corporate',description:'Launches, conferences, retreats and brand experiences designed to leave a mark.',details:['Event strategy','Stage & environment design','Technical production','On-site management']},
 {no:'03',title:'Private Celebrations',description:'Birthdays, anniversaries and milestone gatherings with an unexpected point of view.',details:['Theme & concept','Decor & entertainment','Catering coordination','Guest journey']},
 {no:'04',title:'Premium Experiences',description:'Full-scale productions for the occasions where ordinary simply will not do.',details:['Bespoke creative direction','Luxury production','Hospitality & concierge','End-to-end execution']}
];

export const projects=[
 {type:'01 · WEDDING',title:'Garden After Dark',image:'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1400&q=85'},
 {type:'02 · PRIVATE',title:'The Golden Hour',image:'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1400&q=85'},
 {type:'03 · CORPORATE',title:'Future Forward',image:'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1400&q=85'}
];

export const plannerOptions:Package[]=[
 {label:'Intimate',value:'intimate',price:35000,detail:'Up to 50 guests',includes:['Creative consultation','Essential styling','Day-of coordination']},
 {label:'Signature',value:'signature',price:65000,detail:'Up to 120 guests',includes:['Creative direction','Full styling','Production management','Guest experience']},
 {label:'Grand',value:'grand',price:125000,detail:'120+ guests',includes:['Bespoke concept','Premium production','Hospitality & entertainment','Dedicated event lead']}
];

export const events:Event[]=[
 {slug:'weddings',title:'Weddings',eyebrow:'01 · CELEBRATIONS',description:'Thoughtful wedding experiences shaped around your story, your people and the atmosphere you want to remember.',image:'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=85',accent:'From intimate ceremonies to destination celebrations.',tags:['Ceremony','Reception','Destination'],startingPrice:65000,duration:'4–12 months'},
 {slug:'corporate',title:'Corporate Events',eyebrow:'02 · BRAND EXPERIENCES',description:'Conferences, launches, retreats and celebrations that make your brand feel human, memorable and considered.',image:'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1800&q=85',accent:'Designed for teams, brands and ambitious moments.',tags:['Launches','Conferences','Retreats'],startingPrice:85000,duration:'4–16 weeks'},
 {slug:'private-celebrations',title:'Private Celebrations',eyebrow:'03 · MILESTONES',description:'Birthdays, anniversaries, engagements and milestone gatherings with a creative point of view.',image:'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1800&q=85',accent:'Personal, expressive and never off-the-shelf.',tags:['Birthdays','Anniversaries','Milestones'],startingPrice:35000,duration:'3–10 weeks'},
 {slug:'premium-experiences',title:'Premium Experiences',eyebrow:'04 · BESPOKE',description:'Full-scale productions for the occasions where ordinary simply will not do.',image:'https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=1800&q=85',accent:'Creative direction, production and hospitality in one.',tags:['Luxury','Bespoke','Concierge'],startingPrice:150000,duration:'3–9 months'}
];

export const dummyTestimonials=[
 {quote:'Every detail felt intentional. We could actually enjoy our own celebration.',name:'Aarav & Meera',type:'Wedding'},
 {quote:'Bliss Crafted understood the brief immediately and delivered an experience our guests still talk about.',name:'Riya Sharma',type:'Corporate Event'},
 {quote:'It felt completely us — elevated without ever feeling overdone.',name:'Ananya & Kabir',type:'Private Celebration'}
];

export const faqs=[
 ['How early should we enquire?','For weddings and larger productions, 4–12 months is ideal. Smaller celebrations can often be planned in 3–8 weeks depending on scope and availability.'],
 ['Do you work outside India?','Yes. Bliss Crafted is designed for India and destination events worldwide. Travel and production requirements are scoped into the proposal.'],
 ['Can we customise a package?','Absolutely. The packages are starting points. We can build a bespoke scope around your guest count, venue, creative direction and priorities.'],
 ['Do you handle vendors?','Yes. Depending on the scope, we can coordinate venues, décor, catering, entertainment, technical production, photography and other specialist partners.'],
 ['Are the prices on the website final?','No. The displayed prices are prototype starting points. A final quotation depends on date, location, guest count, production scope and selected services.']
];
