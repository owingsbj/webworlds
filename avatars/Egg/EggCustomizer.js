
// Have some ground for egg avatar to stand on
var ground = new Box(); // for the ground
ground.penetratable = false;
ground.impactSound = "grass";
ground.colorTop = new Color(0x00E000); // top green, like grass
ground.color = new Color(0x404000); // all others sides brown
ground.size.x = 1000;
ground.size.y = 1000;
ground.size.z = 1;
ground.position.z = -1;
ground.textureTop = new Texture("moss", 0.005, 0.005);
world.addObject(ground);

// Action to change the skin of the avatar
function changeSkin() {
	var skinNames = ["happy",  "jack",  "jill", "casper", "bugs", "cupid", "mongo",  "patch",  "santa", "robot"];
	var skinImages = ["happy_skin.png", "jack_skin.png", "jill_skin.png", "casper_skin.png", "bugs_skin.png", "cupid_skin.png", "mongo_skin.png", "patch_skin.jpg", "santa_skin.jpg", "robot_skin.png"];
	var skinIndex = select("Select a skin", skinNames, skinImages);
	if (skinIndex != null) {
		var skin = skinNames[skinIndex];
		avatarCustomization.setCustomProperty("skin", skin);
		avatar.texture.name = skin + "_skin.png";  // just happens to use the same images as shown on the select dialog
	}
}

avatar.actions = [
	new Action("Skin", changeSkin)
];
