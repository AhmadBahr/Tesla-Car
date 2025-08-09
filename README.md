# Tesla Car - Neural Network Self-Driving Simulation

A sophisticated self-driving car simulation powered by neural networks and machine learning, built with vanilla JavaScript and HTML5 Canvas.

![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Canvas](https://img.shields.io/badge/Canvas-000000?style=for-the-badge&logo=html5&logoColor=white)
![Neural Networks](https://img.shields.io/badge/Neural_Networks-FF6B6B?style=for-the-badge&logo=brain&logoColor=white)
![Machine Learning](https://img.shields.io/badge/Machine_Learning-FFD93D?style=for-the-badge&logo=python&logoColor=black)

## ✨ Features

- 🧠 **Neural Network AI** - Self-learning cars using artificial neural networks
- 🎮 **Interactive Simulation** - Real-time 3D-like driving environment
- 📊 **Visual Network Display** - Live visualization of neural network connections
- 🚗 **Traffic Simulation** - Multiple AI cars navigating simultaneously
- 💾 **Model Persistence** - Save and load trained neural network models
- 🎯 **Sensor System** - Advanced collision detection and environmental awareness
- 🎨 **Smooth Graphics** - High-performance Canvas-based rendering
- 📱 **Responsive Design** - Works seamlessly across different screen sizes

## 🚀 Quick Start

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No additional installations required!

### Setup
```bash
# Clone the repository
git clone https://github.com/AhmadBahr/self-driving-car.git

# Navigate to the project directory
cd self-driving-car

# Open index.html in your browser
# Or use a local server:
python -m http.server 8000
# Then visit http://localhost:8000
```

## 🛠️ Tech Stack

**Frontend:**
- Vanilla JavaScript (ES6+)
- HTML5 Canvas for graphics
- CSS3 for styling
- Local Storage for model persistence

**AI & Machine Learning:**
- Custom Neural Network implementation
- Genetic Algorithm for evolution
- Sensor-based perception system
- Real-time learning and adaptation

**Graphics & Physics:**
- 2D Canvas rendering
- Collision detection algorithms
- Smooth animation system
- Physics-based car movement

## 📁 Project Structure

```
Tesla-Car/
├── index.html              # Main HTML file
├── style.css               # Styling and layout
├── main.js                 # Main application logic
├── car.js                  # Car class and physics
├── network.js              # Neural network implementation
├── sensor.js               # Sensor system and ray casting
├── road.js                 # Road generation and borders
├── controls.js             # Input handling
├── visualizer.js           # Neural network visualization
├── utils.js                # Utility functions
├── car.png                 # Car sprite image
└── self-driving-car-with-male-female.png  # Project icon
```

## 🎮 How It Works

### Neural Network Architecture
- **Input Layer**: 5 sensor rays detecting obstacles
- **Hidden Layer**: 6 neurons for pattern recognition
- **Output Layer**: 4 neurons controlling car movement (forward, left, right, reverse)

### Learning Process
1. **Initialization**: 100 cars start with random neural networks
2. **Simulation**: Cars navigate the road while avoiding obstacles
3. **Selection**: Best performing car is selected based on distance traveled
4. **Evolution**: Neural network weights are mutated for the next generation
5. **Persistence**: Best model can be saved to local storage

### Controls
- **💾 Save Button**: Save the best performing neural network
- **🗑️ Discard Button**: Clear saved model and start fresh
- **Automatic Evolution**: Cars continuously learn and improve

## 🔧 Configuration

### Neural Network Parameters
Adjust in `main.js`:
```javascript
const N = 100; // Number of cars per generation
NeuralNetwork.mutate(cars[i].brain, 0.1); // Mutation rate
```

### Sensor Configuration
Modify in `sensor.js`:
```javascript
this.rayCount = 5; // Number of sensor rays
this.rayLength = 150; // Length of sensor rays
```

## 📊 Performance Metrics

- **FPS**: Optimized for 60fps smooth animation
- **Memory**: Efficient object pooling and garbage collection
- **Learning Speed**: Real-time neural network updates
- **Scalability**: Supports hundreds of concurrent AI cars

## 🚀 Advanced Features

### Custom Road Generation
- Procedural road creation with multiple lanes
- Dynamic obstacle placement
- Infinite scrolling environment

### Advanced AI Behaviors
- Collision avoidance
- Lane changing
- Speed adaptation
- Damage detection and recovery

### Visualization Tools
- Real-time neural network visualization
- Sensor ray display
- Performance metrics overlay
- Car trajectory tracking

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines
- Follow JavaScript ES6+ standards
- Maintain clean, documented code
- Test on multiple browsers
- Optimize for performance

## 🐛 Known Issues & Roadmap

### Current Limitations
- 2D simulation (3D planned for future)
- Limited road complexity
- Basic physics model

### Planned Features
- [ ] 3D graphics with WebGL
- [ ] More complex road networks
- [ ] Traffic light system
- [ ] Pedestrian simulation
- [ ] Weather effects
- [ ] Mobile touch controls

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by autonomous vehicle research
- Built with modern web technologies
- Community-driven development

---

**Built with ❤️ using JavaScript and Neural Networks**

*Experience the future of autonomous driving technology in your browser!*
