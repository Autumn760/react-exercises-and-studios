import styles from './ChoresList.module.css';

export default function ChoresList () {
   return (
      <>
         <h3 className = {styles.choresHeading}>Chores to do</h3>
            <ul>
               <li className = {styles.choresText}>Mopping the floor</li>
               <li className = {styles.choresText}>Clean the kitchen</li>
            </ul>
            
      </>
   );
}