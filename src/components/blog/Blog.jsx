import React from "react";
import "./Blog.css";
import chair from "../../assets/all-products/chair.png";
import classicbow from "../../assets/products/classic.png";


const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: "Classic Bow",
      description: "Soft, stylish, and perfect for every occasion.",
      image: classicbow,
      price: "₹35.00",
    },
    {
      id: 1,
      title: "Velvet Hair Bow",
      description: "Soft, stylish, and perfect for every occasion.",
      price: "₹35.00",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC7C78TuRzDA08vF8dkNhvBnYZc-izxzXgghyAm8hm41UlWHUOifBeMiVPFOlVYlYS3xsFhATPm-I5IPCuIRyhe_Zd5BOK-19kAQgQkHMnnN_ZkpTtCHXC-qceWcwTuujBYneQyWZHWp3X2ONrcxo--E1UXkgPJrTTzkk8EyMFzpTOpKAy-srC4QDWmKzPF5djFguOX-AT17gvq9eZfrog91GhAi-Dt38gELUSUAdAXBkyuqMErhjxRKNc71c9CVcERpxS6iKwU2As",
    },
    {
      id: 2,
      title: "Scrunchies Combo",
      description: "Colorful set of 5 premium scrunchies.",
      price: "₹55.00",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBo4-b-ypCGIPufV9RhAus0PtdpU8fZkCzRpaLxfHI6-6aZos1KEKb6ZxRxZk6eYX51BruX0YPyy9Leia2kRDpXK5k92cY_v4Hgs9ks4vNHlAO8ksEuHl0ueeMnwMZtydtYebQtg4fkaxW1PMk2idha4rFv_g7hvUY44W-_i0UFSXFywcSUnkriEpvi3YzCjQUabn240JNqxut9VEtsalre2MuoLsZnKGYdMrGUZckWxZFAazN2trguLPyhXpL3BxPRcM7hirdJItA",
    },
    {
      id: 3,
      title: "Floral Claw Clips",
      description: "Strong hold with a touch of spring.",
      price: "₹20.00",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDGHiq1HEjAfQVqd-gVlyrQGjk7KWDqEEPytqmhckxQ550wZhxyShi8HAL32nVqgex6OBNUx4Mpxqh7T109oOe7zfFtLcpKOsspJKQzP_D1xP1DQytgicVU-TYHGvIgIaNIGcBoWHvu6IL0q5gcLUj-poY0W522kJlH1whzXk9MjyPpmYEbZqsRPl_-dO3xaXSHTYaZXXoE5eAgsWwWHKQZqHWwY_wEXvyxR0-CMeUJDsBBPBryqV99PiN7fgzhSxugq8gzZpVgPg",
    },
    {
      id: 4,
      title: "Comfort Handy Craft",
      description: "Strong hold with a touch of spring.",
      price: "₹20.00",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBLOkU3nQNj2AYpK-963vkezyO797BlfVgaBnnhVdsTNyv1opRvNIyPvtyPzyrFUsEHNjIr2MUoZS0FO3HzRRrU7rq71UbVoVsm9kK-D7uvNxt0N-hP9jmGbjcpDD1T0CiSOFxOP_MXunbSpoPAQuEl9wWz6SmhzEpypktYT4CpagrvXSds71ZMnvAlscoHOgf1MTvsrpyW-dKHvzpSzWacr7KrQDVsQbXGW4gF-3sdgakPq0tvEv90okD2QLYZ2PnYl_Ua010Kixuz",
    },
    {
      id: 4,
      title: "Comfort Handy Craft",
      description: "Strong hold with a touch of spring.",
      price: "₹20.00",
      image: chair,
    },
  ];
  return (
    <>
      <div className="blog-container">
        <h2 className="blog-title">Our Blogs</h2>
        <div className="blog-grid">
          {blogs.map((item) => (
            <div className="blog-card" key={item.id}>
              <img src={item.image} alt={item.title} className="blog-image" />
              <div className="blog-content">
                <h3 className="blog-item-title">{item.title}</h3>
                <p className="blog-description">{item.description}</p>
                <p className="blog-price">{item.price}</p>
                <button className="blog-btn">View More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Blogs;
