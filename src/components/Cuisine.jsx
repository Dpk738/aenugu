import React, { useState } from 'react';
import { Flame } from 'lucide-react';

import lambCurry from '../assets/lamb_curry.png';
import andhraPrawns from '../assets/andhra_prawns.png';
import telanganaChicken from '../assets/telangana_chicken.png';
import teluguThali from '../assets/telugu_thali.png';
import vegJackfruit from '../assets/veg_jackfruit.png';

const MENU_DATA = {
  andhra: [
    {
      title: 'Gongura Mamsam',
      price: '₹750',
      desc: 'Tender baby goat slow-cooked with fresh sorrel leaves, creating a delightful harmony of tangy and fiery flavors.',
      spicy: 3,
      tag: 'Andhra Icon',
      img: lambCurry
    },
    {
      title: 'Nellore Chepala Pulusu',
      price: '₹725',
      desc: 'Local catch simmered in a tangy raw tamarind gravy flavored with mango slices, fenugreek, and Guntur chillies.',
      spicy: 3,
      tag: 'Delta Special',
      img: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Kodi Vepudu',
      price: '₹625',
      desc: 'Pan-fried chicken tossed with caramelized onions, curry leaves, and freshly crushed black pepper in real cold-pressed oil.',
      spicy: 2,
      tag: 'Heritage Starter',
      img: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?q=80&w=600&auto=format&fit=crop'
    }
  ],
  telangana: [
    {
      title: 'Golichina Mamsam',
      price: '₹775',
      desc: 'Deccan-style dry-roasted tender lamb chunks slow-tossed with local wild sesame, dried coconut, and native black pepper.',
      spicy: 3,
      tag: 'Deccan Pride',
      img: lambCurry
    },
    {
      title: 'Natukodi Pulusu',
      price: '₹725',
      desc: 'Rustic free-range chicken curry simmered in a rich roasted poppy seed and peanut gravy, traditionally served hot.',
      spicy: 3,
      tag: 'Classic Countryside',
      img: telanganaChicken
    },
    {
      title: 'Bagara Annam with Dalcha',
      price: '₹675',
      desc: 'Aromatic basmati rice tempered with whole spices and mint, served alongside a thick lentil and bone marrow stew.',
      spicy: 1,
      tag: 'Nizam Feast',
      img: 'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?q=80&w=600&auto=format&fit=crop'
    }
  ],
  thalis: [
    {
      title: 'Aenugu Royal Rajahmundry Thali',
      price: '₹1,150',
      desc: 'An imperial feast showcasing 14 curated seasonal delicacies including dry roasts, curries, rasam, and traditional sweet meats.',
      spicy: 2,
      tag: 'Signature Banquet',
      img: teluguThali
    },
    {
      title: 'Swarna Andhra Veg Thali',
      price: '₹850',
      desc: 'A luxurious vegetarian spread capturing delta flavors, featuring freshly pressed ghee, hot gun-powder, and traditional stews.',
      spicy: 1,
      tag: 'Classic Vegetarian',
      img: teluguThali
    }
  ],
  veg: [
    {
      title: 'Gutti Vankaya Koora',
      price: '₹525',
      desc: 'Tender baby eggplants stuffed with a roast spice paste and cooked in a rich, velvety sesame and peanut masala.',
      spicy: 1,
      tag: 'Telugu Classic',
      img: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Panasa Pottu Koora',
      price: '₹545',
      desc: 'Raw jackfruit finely shredded and steamed, then tempered with mustard seeds, lentils, green chillies, and fresh grated coconut.',
      spicy: 1,
      tag: 'Seasonal Heirloom',
      img: vegJackfruit
    },
    {
      title: 'Kakarakaya Vepudu',
      price: '₹495',
      desc: 'Crisp-fried bitter gourd rounds tossed with whole roasted cashew nuts, jaggery slivers, and hand-milled red chillies.',
      spicy: 1,
      tag: 'Heritage Fry',
      img: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?q=80&w=600&auto=format&fit=crop'
    }
  ],
  nonveg: [
    {
      title: 'Aenugu Special Mutton Biryani',
      price: '₹795',
      desc: 'Aged long-grain basmati rice cooked on charcoal dum with marinated tender lamb ribs and our secret blend of spices.',
      spicy: 2,
      tag: 'Royal Dum',
      img: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Royyala Iguru',
      price: '₹745',
      desc: 'Juicy coastal prawns simmered slowly in a thick, rich paste of onions, ginger, green chillies, and freshly extracted coconut milk.',
      spicy: 2,
      tag: 'Coastal Signature',
      img: andhraPrawns
    }
  ],
  specials: [
    {
      title: 'Korameenu Chepa Fry',
      price: '₹825',
      desc: 'Fresh river murrel fish marinated in hand-ground spices and shallow-fried to crispy perfection on a traditional iron griddle.',
      spicy: 2,
      tag: 'Chef Signature',
      img: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Mamidikaya Pappu Kodi',
      price: '₹695',
      desc: 'A summer specialty combining tender farm chicken with yellow lentils and sour green mango pulp, seasoned with local mustard.',
      spicy: 2,
      tag: 'Seasonal Special',
      img: telanganaChicken
    }
  ]
};

const CATEGORIES = [
  { id: 'andhra', label: 'Andhra Specialties' },
  { id: 'telangana', label: 'Telangana Specialties' },
  { id: 'thalis', label: 'Traditional Thalis' },
  { id: 'veg', label: 'Vegetarian Delicacies' },
  { id: 'nonveg', label: 'Non-Vegetarian' },
  { id: 'specials', label: 'Chef Specials' }
];

export default function Cuisine() {
  const [activeTab, setActiveTab] = useState('andhra');

  return (
    <section id="cuisine" className="section-padding" style={{ backgroundColor: 'var(--color-bg-light)' }}>
      <div className="container">
        
        <div className="section-header reveal-on-scroll">
          <span className="section-subtitle">The Culinary Map</span>
          <h2>A Celebration of Telugu Flavors</h2>
          <div className="brass-divider">
            <span className="dot"></span>
            <span className="dot-large"></span>
            <span className="dot"></span>
          </div>
          <p>
            From the fiery coastal curries of Andhra to the rustic Deccan specialities of Telangana, 
            explore a menu that honors the rich heritage of Telugu kitchens.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="cuisine-tabs-container reveal-on-scroll">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              className={`cuisine-tab-btn ${activeTab === cat.id ? 'active' : ''}`}
              onClick={() => setActiveTab(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Cards Grid */}
        <div className="cuisine-grid">
          {MENU_DATA[activeTab].map((dish, index) => (
            <div 
              key={dish.title} 
              className="cuisine-card reveal-on-scroll" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="cuisine-card-image-box">
                <img src={dish.img} alt={dish.title} className="cuisine-card-img" loading="lazy" />
                <span className="cuisine-card-tag">{dish.tag}</span>
              </div>
              
              <div className="cuisine-card-content">
                <div>
                  <div className="cuisine-card-header">
                    <h3 className="cuisine-card-title">{dish.title}</h3>
                    <span className="cuisine-card-price">{dish.price}</span>
                  </div>
                  <p className="cuisine-card-desc">{dish.desc}</p>
                </div>

                <div className="cuisine-card-footer">
                  <div className="cuisine-spice-level" title={`Spice Level: ${dish.spicy}/3`}>
                    {[...Array(3)].map((_, i) => (
                      <Flame
                        key={i}
                        className="spice-chili"
                        style={{ opacity: i < dish.spicy ? 1 : 0.2 }}
                      />
                    ))}
                  </div>
                  <span className="cuisine-card-badge">Fine Dining</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
