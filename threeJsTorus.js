import React, {useRef, useState, Component} from 'react';
//R3F
import * as THREE from 'three';
// 
// import { Canvas, useFrame } from "react-three-fiber";
//Deai - R3F

import '../App.css';
//React Spring
import ReactDOM from 'react-dom';
// import { SphereBufferGeometry } from 'three';




class Devprojects extends Component {
  componentDidMount() {
    // === THREE.JS CODE START ===
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 70, window.innerWidth/window.innerHeight, 0.1, 1000 );




    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    this.mount.appendChild( renderer.domElement );
    

    var geometry = new THREE.TorusKnotGeometry(20, 3, 13, 50 );
    var material = new THREE.MeshPhongMaterial( { color: 0x000fff, specular: 0x111111, shininess: 60 } );

    var object = new THREE.Mesh( geometry, material );

    var light = new THREE.AmbientLight(0x504040 );
    var pointLight = new THREE.PointLight( 0x0ffff0, 6.5, 150 );
    pointLight.position.set( 10, 50, 50 );

    scene.add( object, light, pointLight );
    camera.position.z = 50;
    var animate = function () {
      requestAnimationFrame( animate );
      object.rotation.x += 0.001;
      object.rotation.y -= 0.002;
      renderer.render( scene, camera );
    };
    animate();
    // === THREE.JS EXAMPLE CODE END ===
  }
  render() {
    return (
      <div>
      <div ref={ref => (this.mount = ref)}/>
      <div>
        <h3>Three.js - simple torus rotation </h3>
      </div>
      </div>

    )
  }
}



export default Devprojects;



