import Navbar from "../Navbar";
import Gym from "../../image/Aboutgym.png"

const About = () => {
   
  return (
    <>
      <Navbar />
      <h1>About Us</h1>
      <div style={styles.container}>
        <div style={styles.imageContainer}>
          <img
            src={Gym}
            alt="Gym"
            style={styles.image}
          />
        </div>
        <div style={styles.content}>
          <h2>Welcome to Our Gym</h2>
          <p>
            At Our Gym, we are committed to helping you achieve your fitness goals and lead a healthy lifestyle. 
            With state-of-the-art facilities and a team of experienced trainers, we provide a supportive 
            and motivating environment for individuals of all fitness levels.
          </p>
          <p>
            Our gym offers a wide range of fitness programs and classes, including strength training, 
            cardio workouts, group exercises, and personalized training sessions. Our trainers are 
            dedicated to helping you design a customized workout plan that suits your needs and preferences.
          </p>
          <p>
            We believe that fitness is not just about physical strength but also about mental well-being. 
            That's why we offer yoga and meditation classes to help you find balance and relieve stress. 
            Our holistic approach to fitness ensures that you can improve your overall health and wellness.
          </p>
          <p>
            Join us today and embark on a journey to transform your body and mind. Our friendly staff 
            is ready to assist you and provide the guidance you need to achieve your fitness goals. 
            Start your fitness journey with us and be a part of our vibrant and energetic fitness community.
          </p>
        </div>
      </div>
      
    </>
  );
};

const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '20px',
    },
    imageContainer: {
      flex: '1',
      marginRight: '20px',
    },
    image: {
      width: 'auto',
      maxWidth: '400px',
      height: 'auto',
      borderRadius: '8px',
    },
    content: {
      flex: '1',
    },
  };
  
export default About;
