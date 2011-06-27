var distance = 0.0;

function updateDistance(){
	var offset = distance / 2;
	transform.FindChild("RightEye").position = (new Vector3(offset,0,0)) + transform.position ;
	transform.FindChild("LeftEye").position = (new Vector3(-offset,0,0)) + transform.position ;
}

function Start(){
	updateDistance();
}

function Update () {
}