let container;
let camera, scene, renderer;
let torusMesh, sphereMesh, lightMesh, torus, sphere;
let toruses = [];
let spheres = [];
let directionalLight, pointLight;
let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;
// RAYCASTER
let raycaster = new THREE.Raycaster();
let mouse = new THREE.Vector2();
window.addEventListener( 'mousemove', onMouseMove, false );

//
init();
animate();

function init() {
	container = document.createElement( 'div' );
	document.body.appendChild( container );
	camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 100000 );
	camera.position.z = 3200;
	scene = new THREE.Scene();
	scene.background = new THREE.CubeTextureLoader()
		.setPath( './images/index/' )
		.load( [ 'px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png' ] );

	// geometries
	let torus = new THREE.TorusGeometry( 100, 30, 160, 100 );
	let sphere = new THREE.SphereGeometry(100,32,32);

	// toruses
	let material = new THREE.MeshBasicMaterial( { color: 0xffffff, envMap: scene.background } );
		for ( let i = 0; i < 50; i ++ ) {
			let torusMesh = new THREE.Mesh( torus, material );
			torusMesh.position.x = Math.random() * 10000 - 5000;
			torusMesh.position.y = Math.random() * 10000 - 5000;
			torusMesh.position.z = Math.random() * 10000 - 5000;
			torusMesh.scale.x = torusMesh.scale.y = torusMesh.scale.z = Math.random() * 3 + 1;
			scene.add( torusMesh );
			toruses.push( torusMesh );
	}

	//spheres
	for ( let i = 0; i < 50; i ++ ) {
		let sphereMesh = new THREE.Mesh( sphere, material );
		sphereMesh.position.x = Math.random() * 10000 - 5000;
		sphereMesh.position.y = Math.random() * 10000 - 5000;
		sphereMesh.position.z = Math.random() * 10000 - 5000;
		sphereMesh.scale.x = sphereMesh.scale.y = sphereMesh.scale.z = Math.random() * 3 + 1;
		scene.add( sphereMesh );
		spheres.push( sphereMesh );
}



renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
container.appendChild( renderer.domElement );

window.addEventListener( 'resize', onWindowResize, false );
}

function onMouseMove(event) {
	mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
}

// window.addEventListener( 'mousemove', onMouseMove, false );

// document.addEventListener('mousedown', onDocumentMouseDown, false);


//RAYCASTER
//

function onWindowResize() {
	windowHalfX = window.innerWidth / 2;
	windowHalfY = window.innerHeight / 2;
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
}

function animate() {
	requestAnimationFrame( animate );
	render();
}

function render() {
	//RAYCASTER
	raycaster.setFromCamera( mouse, camera );
	let intersects = raycaster.intersectObjects( scene.children );

	for ( var i = 0; i < intersects.length; i++ ) {

		intersects[ i ].object.material.color.set( 0xff0000 );

	}
	//
	let timer = 0.0001 * Date.now();
	for ( let i = 0, il = toruses.length; i < il; i ++ ) {
		let torus = toruses[ i ];
		torus.position.x = 5000 * Math.cos( timer + i );
		torus.position.y = 5000 * Math.sin( timer + i * 1.1 );
	}
	for ( let i = 0, il = spheres.length; i < il; i ++ ) {
		let sphere = spheres[ i ];
		sphere.position.x = 5000 * Math.cos( timer + i );
		sphere.position.y = 5000 * Math.sin( timer + i * 1.1 );
	}
	renderer.render( scene, camera );

}
