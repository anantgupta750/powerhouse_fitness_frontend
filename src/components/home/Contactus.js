import Navbar from "../Navbar";

const Contactus = () => {
    return (
        <>
        <Navbar/>
        <div style={styles.container}>
      <h1 style={styles.heading}>Reach Us</h1>
      <div style={styles.infoContainer}>
        <div style={styles.infoItem}>
          <h3>Phone:</h3>
          <p>+91-750-5454-380</p>
        </div>
        <div style={styles.infoItem}>
          <h3>Address:</h3>
          <p>123 Gym Street, Noida, UP</p>
        </div>
        <div style={styles.infoItem}>
          <h3>Email:</h3>
          <p>powerhousefitness@stayhealthy.com</p>
        </div>
        {/* Add more info items as needed */}
      </div>
    </div>
        </>
    )
}
const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      background: '#f5f5f5',
    },
    heading: {
      fontSize: '36px',
      fontWeight: 'bold',
      color: '#333',
      marginBottom: '20px',
    },
    infoContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    infoItem: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: '20px',
      padding: '20px',
      borderRadius: '8px',
      background: '#fff',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      maxWidth: '400px',
      width: '100%',
    },
  };
export default Contactus;