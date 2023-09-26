// Add your Circle class here
class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  
    // Getter method for diameter
    get diameter() {
      return this.radius * 2;
    }
  
    // Setter method for diameter
    set diameter(diameter) {
      this.radius = diameter / 2;
    }
  
    // Getter method for circumference
    get circumference() {
      return Math.PI * this.diameter;
    }
  
    // Setter method for circumference
    set circumference(circumference) {
      this.radius = circumference / (2 * Math.PI);
    }
  
    // Getter method for area
    get area() {
      return Math.PI * Math.pow(this.radius, 2);
    }
  
    // Setter method for area
    set area(area) {
      this.radius = Math.sqrt(area / Math.PI);
    }
  }
  
  // Example usage:
  const myCircle = new Circle(5); // Create a Circle with radius 5
  
  console.log(myCircle.diameter); // Get diameter (should be 10)
  myCircle.diameter = 12; // Set diameter to 12
  console.log(myCircle.radius); // Check the updated radius (should be 6)
  
  console.log(myCircle.circumference); // Get circumference (should be ~37.7)
  myCircle.circumference = 40; // Set circumference to 40
  console.log(myCircle.radius); // Check the updated radius (should be ~6.37)
  
  console.log(myCircle.area); // Get area (should be ~126.73)
  myCircle.area = 150; // Set area to 150
  console.log(myCircle.radius); // Check the updated radius (should be ~6.12)
  