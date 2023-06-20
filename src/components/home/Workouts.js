import Navbar from "../Navbar";
import Cardio from "../../image/CARDIO-BLAST.jpg";
import Strength from "../../image/Strengthtraining.jpg";
import Yoga from "../../image/Yogapose.jpg";
import Hiit from "../../image/HIIT.jpg";
import Pilates from "../../image/Pilates.jpg";
import Cycle from "../../image/Cycle.jpg";

const Workouts = () => {
    const workouts = [
        {
          title: 'Cardio Blast',
          description: 'High-intensity cardio workout to burn calories and improve endurance.',
          image: Cardio,
        },
        {
          title: 'Strength Training',
          description: 'Build strength and muscle through resistance exercises using weights and equipment.',
          image: Strength,
        },
        {
          title: 'Yoga Flow',
          description: 'Find inner peace and flexibility with a calming yoga practice.',
          image: Yoga,
        },
        {
          title: 'HIIT Workout',
          description: 'Get your heart rate up with a high-intensity interval training session.',
          image: Yoga,
        },
        {
          title: 'Pilates Class',
          description: 'Improve core strength and stability with a Pilates mat or reformer class.',
          image: Hiit,
        },
        {
          title: 'Cycling Session',
          description: 'Pedal your way to fitness with an energizing indoor cycling session.',
          image: Cycle,
        },
      ];
    return (
        <>
        <Navbar/>
        <div>
      <h1 style={styles.heading}>Workouts</h1>
      <div style={styles.cardContainer}>
        {workouts.map((workout, index) => (
          <div key={index} style={styles.card}>
            <img src={workout.image} alt={workout.title} style={styles.cardImage} />
            <div style={styles.cardContent}>
              <h3 style={styles.title}>{workout.title}</h3>
              <p>{workout.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
        </>
    )
}

const styles = {
    heading: {
      color: '#333',
      textAlign: 'center',
      fontSize: '24px',
      margin: '20px',
    },
    cardContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '20px',
      margin: '20px',
    },
    card: {
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '20px',
      backgroundColor: '#fff',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      transition: 'box-shadow 0.3s ease',
      cursor: 'pointer',
      ':hover': {
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      },
    },
    cardImage: {
      width: '100%',
      height: 'auto',
      borderRadius: '8px',
    },
    cardContent: {
      marginTop: '10px',
    },
    title: {
      color: '#333',
      fontSize: '18px',
      fontWeight: 'bold',
    },
  };
  
export default Workouts;