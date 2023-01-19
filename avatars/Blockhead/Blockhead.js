// A block avatar, somewhat mindcrafty. 

var skin = "adventurer-steve.png";

avatar = new Sphere(); // the avatar will be in this sphere
avatar.name = "Blockhead";
avatar.size = new Vector(1, 0.5, 2);
avatar.transparency = 0.99; // the avatar is clear. The pieces of the avatar are inside.
//  Note: the avatar is not completely transparent so that it can be picked
avatar.elasticity = -0.5;
//Make the avatar lighter than water but heavier than air, so it floats well to swim.
avatar.density = 0.25;

var body = new Box();
body.name = "torso";
body.size = new Vector(0.5, 0.25, 0.75);
body.gluedToParent = true;
avatar.addChild(body);
body.position = new Vector(0, 0, 0.125);
body.textureSide1 = new Texture(skin, 8, 6, 0, 2.5, 2, true);
body.textureSide2 = new Texture(skin, 16, 6, 0, 4, 2, true);
body.textureSide3 = new Texture(skin, 8, 6, 0, 4, 2, true);
body.textureSide4 = new Texture(skin, 16, 6, 0, 7, 2, true);
body.textureTop = new Texture(skin, 8, 16, 0, 2.5, 4, true);
body.textureBottom = new Texture(skin, 8, 16, 0, 4, 4, true);

var head = new Box();
head.name = "head";
head.size = new Vector(0.5, 0.5, 0.5);
body.addChild(head);
head.position = new Vector(0, 0, 0.625);
head.rotationPoint = new Vector(0, 0, -0.25);
head.textureSide1 = new Texture(skin, 8, 8, 0, 1, 1, true);
head.textureSide2 = new Texture(skin, 8, 8, 0, 0, 1, true);
head.textureSide3 = new Texture(skin, 8, 8, 0, 3, 1, true);
head.textureSide4 = new Texture(skin, 8, 8, 0, 2, 1, true);
head.textureTop = new Texture(skin, 8, 8, 0, 1, 0, true);
head.textureBottom = new Texture(skin, 8, 8, 0, 2, 0, true);

var focus = new Box();
focus.name = "focus";
focus.transparency = 1.0;
focus.position = new Vector(0, -0.25, 0.125);
head.addChild(focus);

var leftArm = new Box();
leftArm.name = "left arm";
leftArm.size = new Vector(0.25, 0.25, 0.75);
body.addChild(leftArm);
leftArm.position = new Vector(-0.375, 0, 0.0);
leftArm.rotationPoint = new Vector(0, 0, 0.25);
leftArm.textureSide1 = new Texture(skin, 16, 6, 0, 9, 5, true);
leftArm.textureSide2 = new Texture(skin, 16, 6, 0, 8, 5, true);
leftArm.textureSide3 = new Texture(skin, 16, 6, 0, 11, 5, true);
leftArm.textureSide4 = new Texture(skin, 16, 6, 0, 10, 5, true);
leftArm.textureTop = new Texture(skin, 16, 16, 0, 9, 12, true);
leftArm.textureBottom = new Texture(skin, 16, 16, -90, 10, 12, true);

var rightArm = new Box();
rightArm.name = "right arm";
rightArm.size = new Vector(0.25, 0.25, 0.75);
body.addChild(rightArm);
rightArm.position = new Vector(0.375, 0, 0.0);
rightArm.rotationPoint = new Vector(0, 0, 0.25);
rightArm.textureSide1 = new Texture(skin, 16, 6, 0, 11, 2, true);
rightArm.textureSide2 = new Texture(skin, 16, 6, 0, 10, 2, true);
rightArm.textureSide3 = new Texture(skin, 16, 6, 0, 13, 2, true);
rightArm.textureSide4 = new Texture(skin, 16, 6, 0, 12, 2, true);
rightArm.textureTop = new Texture(skin, 16, 16, 0, 11, 4, true);
rightArm.textureBottom = new Texture(skin, 16, 16, -90, 12, 4, true);

var leftLeg = new Box();
leftLeg.name = "left leg";
leftLeg.size = new Vector(0.25, 0.25, 0.75);
body.addChild(leftLeg);
leftLeg.position = new Vector(0.125, 0, -0.75);
leftLeg.rotationPoint = new Vector(0, 0, 0.375);
leftLeg.textureSide1 = new Texture(skin, 16, 6, 0, 5, 5, true);
leftLeg.textureSide2 = new Texture(skin, 16, 6, 0, 4, 5, true);
leftLeg.textureSide3 = new Texture(skin, 16, 6, 0, 7, 5, true);
leftLeg.textureSide4 = new Texture(skin, 16, 6, 0, 6, 5, true);
leftLeg.textureTop = new Texture(skin, 16, 16, 0, 5, 12, true);
leftLeg.textureBottom = new Texture(skin, 16, 16, -90, 6, 12, true);

var rightLeg = new Box();
rightLeg.name = "right leg";
rightLeg.size = new Vector(0.25, 0.25, 0.75);
body.addChild(rightLeg);
rightLeg.position = new Vector(-0.125, 0, -0.75);
rightLeg.rotationPoint = new Vector(0, 0, 0.375);
rightLeg.textureSide1 = new Texture(skin, 16, 6, 0, 1, 2, true);
rightLeg.textureSide2 = new Texture(skin, 16, 6, 0, 0, 2, true);
rightLeg.textureSide3 = new Texture(skin, 16, 6, 0, 3, 2, true);
rightLeg.textureSide4 = new Texture(skin, 16, 6, 0, 2, 2, true);
rightLeg.textureTop = new Texture(skin, 16, 16, 0, 1, 4, true);
rightLeg.textureBottom = new Texture(skin, 16, 16, -90, 2, 4, true);

avatar.addBehavior(new HumanMotionBehavior());
