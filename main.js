let container;
let camera, scene, renderer;
let mesh, lightMesh, torus;
let spheres = [];
let directionalLight, pointLight;
let mouseX = 0;
let mouseY = 0;
let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;

// let texture = new THREE.TextureLoader().load( "textures/water.jpg" );
// texture.wrapS = THREE.RepeatWrapping;
// texture.wrapT = THREE.RepeatWrapping;
// texture.repeat.set( 4, 4 );

// document.addEventListener( 'mousemove', onDocumentMouseMove, false );
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
	let torus = new THREE.TorusGeometry( 100, 30, 160, 100 );
	let material = new THREE.MeshBasicMaterial( { color: 0xffffff, envMap: scene.background } );
	for ( let i = 0; i < 100; i ++ ) {
		let mesh = new THREE.Mesh( torus, material );
		mesh.position.x = Math.random() * 10000 - 5000;
		mesh.position.y = Math.random() * 10000 - 5000;
		mesh.position.z = Math.random() * 10000 - 5000;
		mesh.scale.x = mesh.scale.y = mesh.scale.z = Math.random() * 3 + 1;
		scene.add( mesh );
		spheres.push( mesh );
	}
	//
	renderer = new THREE.WebGLRenderer();
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	container.appendChild( renderer.domElement );
	//
	window.addEventListener( 'resize', onWindowResize, false );
}

function onWindowResize() {
	windowHalfX = window.innerWidth / 2;
	windowHalfY = window.innerHeight / 2;
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
}

function onDocumentMouseMove( event ) {
	mouseX = ( event.clientX - windowHalfX ) * 10;
	mouseY = ( event.clientY - windowHalfY ) * 10;
}

function animate() {
	requestAnimationFrame( animate );
	render();
}

function render() {
	let timer = 0.0001 * Date.now();
	for ( let i = 0, il = spheres.length; i < il; i ++ ) {
		let sphere = spheres[ i ];
		sphere.position.x = 5000 * Math.cos( timer + i );
		sphere.position.y = 5000 * Math.sin( timer + i * 1.1 );
	}
	camera.position.x += ( mouseX - camera.position.x ) * .05;
	camera.position.y += ( - mouseY - camera.position.y ) * .05;
	camera.lookAt( scene.position );
	renderer.render( scene, camera );
}
