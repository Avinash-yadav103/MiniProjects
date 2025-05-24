console.log("Three JS Introduction")

function main(){
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({canvas:document.querySelector('#globe')});
    renderer.setSize(window.innerWidth, window.innerHeight);

    //create earthGeometry
    const earthGeometry = new THREE.SphereGeometry(0.5,32,32);
    const earthMaterial = new THREE.MeshPhongMaterial({
        // wireframe: true,
        map: new THREE.TextureLoader().load('texture/earthmap.jpeg'),
        bumpMap: new THREE.TextureLoader().load('texture/earthbump.jpeg'),
        bumpScale: 0.01
    });

    const earthMesh = new THREE.Mesh(earthGeometry,earthMaterial);
    scene.add(earthMesh);

    //set ambient light
    const ambientlight = new THREE.AmbientLight(0xffffff ,0.2);
    scene.add(ambientlight);
    //setting point light
    const pointerlight = new THREE.PointLight(0xffffff ,0.9);
    //Light location
    pointerlight.position.set(5,3,5);
    scene.add(pointerlight);

    const camera = new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,0.1,1000);
    camera.position.z = 1.6;

    const render= () =>{
        earthMesh.rotateOnWorldAxis(new THREE.Vector3(0,1,0),0.01)
        renderer.render(scene,camera);
    } 

    const animate=()=>{
        requestAnimationFrame(animate);
        render();
    }
    animate();
    
}

window.onload = main;