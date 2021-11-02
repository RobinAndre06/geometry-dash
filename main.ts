namespace SpriteKind {
    export const Coin = SpriteKind.create()
    export const Dont = SpriteKind.create()
    export const Special = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    nextLevel()
    Current_level += 1
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.over(false, effects.melt)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    Geometry.vx += -85
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Coin, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Geometry.vy == 0) {
        Geometry.vy = -175
    }
    animation.runImageAnimation(
    Geometry,
    [img`
        4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 4 
        2 2 4 b b b b 2 2 b b b b 4 2 2 
        2 4 2 6 6 6 b 2 2 b 6 6 6 2 4 2 
        2 b 6 2 6 6 b 2 2 b 6 6 2 6 b 2 
        2 b 6 6 2 6 b 2 2 b 6 2 6 6 b 2 
        2 b 6 6 6 2 4 2 2 4 2 6 6 6 b 2 
        2 b b b b 4 2 2 2 2 4 b b b b 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 b b b b 4 2 2 2 2 4 b b b b 2 
        2 b 6 6 6 2 4 2 2 4 2 6 6 6 b 2 
        2 b 6 6 2 6 b 2 2 b 6 2 6 6 b 2 
        2 b 6 2 6 6 b 2 2 b 6 6 2 6 b 2 
        2 4 2 6 6 6 b 2 2 b 6 6 6 2 4 2 
        2 2 4 b b b b 2 2 b b b b 4 2 2 
        4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 4 
        `,img`
        . . . . . . . . 4 . . . . . . . 
        . . . . . . . 4 2 4 . . . . . . 
        . . . . . 2 2 a 2 a 2 . . . . . 
        . . . . 2 2 a 6 2 6 a 2 . . . . 
        . . . 2 2 2 2 6 2 6 2 2 2 . . . 
        . . 2 a a 2 2 4 2 4 2 2 a 2 . . 
        . 4 a 6 6 6 4 2 2 2 4 6 6 a 4 . 
        4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . 4 6 6 6 a 4 2 2 2 4 6 6 a 4 4 
        . . 2 a a 2 2 4 2 4 2 2 a a 2 . 
        . . . 2 2 2 2 6 2 6 2 2 2 2 . . 
        . . . 2 2 2 6 6 2 6 a 2 2 . . . 
        . . . . 2 a 6 6 2 6 a 2 . . . . 
        . . . . . 2 a a 2 a 2 . . . . . 
        . . . . . . 2 4 2 4 . . . . . . 
        . . . . . . . 4 . . . . . . . . 
        `,img`
        4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 4 
        2 2 4 b b b b 2 2 b b b b 4 2 2 
        2 4 2 6 6 6 b 2 2 b 6 6 6 2 4 2 
        2 b 6 2 6 6 b 2 2 b 6 6 2 6 b 2 
        2 b 6 6 2 6 b 2 2 b 6 2 6 6 b 2 
        2 b 6 6 6 2 4 2 2 4 2 6 6 6 b 2 
        2 b b b b 4 2 2 2 2 4 b b b b 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 b b b b 4 2 2 2 2 4 b b b b 2 
        2 b 6 6 6 2 4 2 2 4 2 6 6 6 b 2 
        2 b 6 6 2 6 b 2 2 b 6 2 6 6 b 2 
        2 b 6 2 6 6 b 2 2 b 6 6 2 6 b 2 
        2 4 2 6 6 6 b 2 2 b 6 6 6 2 4 2 
        2 2 4 b b b b 2 2 b b b b 4 2 2 
        4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        `],
    200,
    false
    )
    Geometry.vx = -85
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Special, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(10)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Geometry.vy == 0) {
        Geometry.vy = -175
    }
    animation.runImageAnimation(
    Geometry,
    [img`
        4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 4 
        2 2 4 b b b b 2 2 b b b b 4 2 2 
        2 4 2 6 6 6 b 2 2 b 6 6 6 2 4 2 
        2 b 6 2 6 6 b 2 2 b 6 6 2 6 b 2 
        2 b 6 6 2 6 b 2 2 b 6 2 6 6 b 2 
        2 b 6 6 6 2 4 2 2 4 2 6 6 6 b 2 
        2 b b b b 4 2 2 2 2 4 b b b b 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 b b b b 4 2 2 2 2 4 b b b b 2 
        2 b 6 6 6 2 4 2 2 4 2 6 6 6 b 2 
        2 b 6 6 2 6 b 2 2 b 6 2 6 6 b 2 
        2 b 6 2 6 6 b 2 2 b 6 6 2 6 b 2 
        2 4 2 6 6 6 b 2 2 b 6 6 6 2 4 2 
        2 2 4 b b b b 2 2 b b b b 4 2 2 
        4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 4 
        `,img`
        . . . . . . . . 4 . . . . . . . 
        . . . . . . . 4 2 4 . . . . . . 
        . . . . . 2 2 a 2 a 2 . . . . . 
        . . . . 2 2 a 6 2 6 a 2 . . . . 
        . . . 2 2 2 2 6 2 6 2 2 2 . . . 
        . . 2 a a 2 2 4 2 4 2 2 a 2 . . 
        . 4 a 6 6 6 4 2 2 2 4 6 6 a 4 . 
        4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . 4 6 6 6 a 4 2 2 2 4 6 6 a 4 4 
        . . 2 a a 2 2 4 2 4 2 2 a a 2 . 
        . . . 2 2 2 2 6 2 6 2 2 2 2 . . 
        . . . 2 2 2 6 6 2 6 a 2 2 . . . 
        . . . . 2 a 6 6 2 6 a 2 . . . . 
        . . . . . 2 a a 2 a 2 . . . . . 
        . . . . . . 2 4 2 4 . . . . . . 
        . . . . . . . 4 . . . . . . . . 
        `,img`
        4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 4 
        2 2 4 b b b b 2 2 b b b b 4 2 2 
        2 4 2 6 6 6 b 2 2 b 6 6 6 2 4 2 
        2 b 6 2 6 6 b 2 2 b 6 6 2 6 b 2 
        2 b 6 6 2 6 b 2 2 b 6 2 6 6 b 2 
        2 b 6 6 6 2 4 2 2 4 2 6 6 6 b 2 
        2 b b b b 4 2 2 2 2 4 b b b b 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 b b b b 4 2 2 2 2 4 b b b b 2 
        2 b 6 6 6 2 4 2 2 4 2 6 6 6 b 2 
        2 b 6 6 2 6 b 2 2 b 6 2 6 6 b 2 
        2 b 6 2 6 6 b 2 2 b 6 6 2 6 b 2 
        2 4 2 6 6 6 b 2 2 b 6 6 6 2 4 2 
        2 2 4 b b b b 2 2 b b b b 4 2 2 
        4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        `],
    200,
    false
    )
    Geometry.vx = 85
})
function nextLevel () {
    if (Current_level == 0) {
        tiles.setTilemap(tilemap`level8`)
    } else if (Current_level == 1) {
        tiles.setTilemap(tilemap`level1`)
    } else if (Current_level == 2) {
        tiles.setTilemap(tilemap`level2`)
        info.changeScoreBy(10)
    } else if (Current_level == 3) {
        tiles.setTilemap(tilemap`level4`)
        game.showLongText("Winter", DialogLayout.Center)
        info.changeScoreBy(10)
    } else if (Current_level == 4) {
        tiles.setTilemap(tilemap`level5`)
        info.changeScoreBy(10)
    } else if (Current_level == 5) {
        tiles.setTilemap(tilemap`level6`)
        info.changeScoreBy(10)
    } else if (Current_level == 6) {
        tiles.setTilemap(tilemap`level7`)
        info.changeScoreBy(20)
        game.showLongText("BOSS lvl!", DialogLayout.Center)
        game.showLongText("If you go back, press B!", DialogLayout.Center)
    } else {
        game.over(true)
    }
    Geometry.ay = 500
    Geometry.vx = 85
    tiles.placeOnRandomTile(Geometry, assets.tile`myTile2`)
    scene.cameraFollowSprite(Geometry)
    for (let value of tiles.getTilesByType(assets.tile`myTile3`)) {
        Coin = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Coin)
        animation.runImageAnimation(
        Coin,
        [img`
            . . . . f f f f f f f . . . . . 
            . . . f 5 5 5 5 5 5 5 f . . . . 
            . . f 5 5 4 4 4 4 4 5 5 f . . . 
            . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
            . . f 5 5 4 4 5 5 5 5 5 f . . . 
            . . . f 5 5 5 5 5 5 5 f . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . f f f f f . . . . . . 
            . . . . f 5 5 5 5 5 f . . . . . 
            . . . f 5 5 4 4 4 5 5 f . . . . 
            . . f 5 4 5 5 5 5 5 5 5 f . . . 
            . . f 5 4 5 5 5 5 5 5 5 f . . . 
            . . f 5 4 5 5 5 5 5 5 5 f . . . 
            . . f 5 4 5 5 5 5 5 5 5 f . . . 
            . . f 5 4 5 5 5 5 5 5 5 f . . . 
            . . f 5 4 5 5 5 5 5 5 5 f . . . 
            . . f 5 4 5 5 5 5 5 5 5 f . . . 
            . . . f 5 5 4 5 5 5 5 f . . . . 
            . . . . f 5 5 5 5 5 f . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . f f f f . . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . f 5 5 4 5 5 f . . . . . 
            . . . f 5 4 5 5 5 5 5 f . . . . 
            . . . f 5 4 5 5 5 5 5 f . . . . 
            . . . f 5 4 5 5 5 5 5 f . . . . 
            . . . f 5 4 5 5 5 5 5 f . . . . 
            . . . f 5 4 5 5 5 5 5 f . . . . 
            . . . f 5 4 5 5 5 5 5 f . . . . 
            . . . f 5 4 5 5 5 5 5 f . . . . 
            . . . . f 5 5 5 5 5 f . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . f . . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . f . . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 4 f . . . . . . . 
            . . . . . f 5 4 5 f . . . . . . 
            . . . . . f 5 4 5 f . . . . . . 
            . . . . . f 5 4 5 f . . . . . . 
            . . . . . f 5 4 5 f . . . . . . 
            . . . . . f 5 4 5 f . . . . . . 
            . . . . . f 5 4 5 f . . . . . . 
            . . . . . f 5 4 5 f . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . f . . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 4 f . . . . . . . 
            . . . . . . f 4 f . . . . . . . 
            . . . . . . f 4 f . . . . . . . 
            . . . . . . f 4 f . . . . . . . 
            . . . . . . f 4 f . . . . . . . 
            . . . . . . f 4 f . . . . . . . 
            . . . . . . f 4 f . . . . . . . 
            . . . . . . f 4 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        150,
        true
        )
        tiles.placeOnTile(Coin, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile5`)) {
        Special_coin = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Special)
        animation.runImageAnimation(
        Special_coin,
        [img`
            . . . . f f f f f f f . . . . . 
            . . f f 5 5 5 5 5 5 5 f f . . . 
            . f 5 5 4 4 4 4 4 4 4 5 5 f . . 
            . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
            f 5 5 4 5 5 5 5 5 5 5 5 5 5 f . 
            f 5 5 4 5 5 5 5 5 5 5 5 5 5 f . 
            f 5 5 4 5 5 5 5 5 5 5 5 5 5 f . 
            f 5 5 4 5 5 5 5 5 5 5 5 5 5 f . 
            f 5 5 4 5 5 5 5 5 5 5 5 5 5 f . 
            f 5 5 4 5 5 5 5 5 5 5 5 5 5 f . 
            f 5 5 4 5 5 5 5 5 5 5 5 5 5 f . 
            . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 5 5 4 4 4 5 5 5 5 5 f . . 
            . . f f 5 5 5 5 5 5 5 f f . . . 
            . . . . f f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . f f f f f . . . . . . 
            . . . f f 5 5 5 5 5 f f . . . . 
            . . f 5 5 4 4 4 4 4 5 5 f . . . 
            . . f 5 5 5 5 5 5 5 5 5 f . . . 
            . f 5 5 4 5 5 5 5 5 5 5 5 f . . 
            . f 5 5 4 5 5 5 5 5 5 5 5 f . . 
            . f 5 5 4 5 5 5 5 5 5 5 5 f . . 
            . f 5 5 4 5 5 5 5 5 5 5 5 f . . 
            . f 5 5 4 5 5 5 5 5 5 5 5 f . . 
            . f 5 5 4 5 5 5 5 5 5 5 5 f . . 
            . f 5 5 4 5 5 5 5 5 5 5 5 f . . 
            . . f 5 4 5 5 5 5 5 5 5 f . . . 
            . . f 5 5 5 4 4 5 5 5 5 f . . . 
            . . . f f 5 5 5 5 5 f f . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . f f f . . . . . . . 
            . . . . f f 5 5 5 f f . . . . . 
            . . . f 5 5 4 4 4 5 5 f . . . . 
            . . . f 5 5 5 5 5 5 5 f . . . . 
            . . f 5 5 4 5 5 5 5 5 5 f . . . 
            . . f 5 5 4 5 5 5 5 5 5 f . . . 
            . . f 5 5 4 5 5 5 5 5 5 f . . . 
            . . f 5 5 4 5 5 5 5 5 5 f . . . 
            . . f 5 5 4 5 5 5 5 5 5 f . . . 
            . . f 5 5 4 5 5 5 5 5 5 f . . . 
            . . f 5 5 4 5 5 5 5 5 5 f . . . 
            . . . f 5 4 5 5 5 5 5 f . . . . 
            . . . f 5 5 5 4 5 5 5 f . . . . 
            . . . . f f 5 5 5 f f . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . f . . . . . . . . 
            . . . . . f f 5 f f . . . . . . 
            . . . . f 5 5 4 5 5 f . . . . . 
            . . . . f 5 5 5 5 5 f . . . . . 
            . . . f 5 5 4 5 5 5 5 f . . . . 
            . . . f 5 5 4 5 5 5 5 f . . . . 
            . . . f 5 5 4 5 5 5 5 f . . . . 
            . . . f 5 5 4 5 5 5 5 f . . . . 
            . . . f 5 5 4 5 5 5 5 f . . . . 
            . . . f 5 5 4 5 5 5 5 f . . . . 
            . . . f 5 5 4 5 5 5 5 f . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . . f 5 5 5 5 5 f . . . . . 
            . . . . . f f 5 f f . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . f . . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . f 5 4 5 f . . . . . . 
            . . . . . f 5 4 5 f . . . . . . 
            . . . . f 5 5 4 5 5 f . . . . . 
            . . . . f 5 5 4 5 5 f . . . . . 
            . . . . f 5 5 4 5 5 f . . . . . 
            . . . . f 5 5 4 5 5 f . . . . . 
            . . . . f 5 5 4 5 5 f . . . . . 
            . . . . f 5 5 4 5 5 f . . . . . 
            . . . . f 5 5 4 5 5 f . . . . . 
            . . . . . f 5 4 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . f . . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 4 f . . . . . . . 
            . . . . . . f 4 f . . . . . . . 
            . . . . . f 5 4 5 f . . . . . . 
            . . . . . f 5 4 5 f . . . . . . 
            . . . . . f 5 4 5 f . . . . . . 
            . . . . . f 5 4 5 f . . . . . . 
            . . . . . f 5 4 5 f . . . . . . 
            . . . . . f 5 4 5 f . . . . . . 
            . . . . . f 5 4 5 f . . . . . . 
            . . . . . . f 4 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . f . . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 4 f . . . . . . . 
            . . . . . . f 4 f . . . . . . . 
            . . . . . . f 4 f . . . . . . . 
            . . . . . . f 4 f . . . . . . . 
            . . . . . . f 4 f . . . . . . . 
            . . . . . . f 4 f . . . . . . . 
            . . . . . . f 4 f . . . . . . . 
            . . . . . . f 4 f . . . . . . . 
            . . . . . . f 4 f . . . . . . . 
            . . . . . . f 4 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        150,
        true
        )
        tiles.placeOnTile(Special_coin, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    Geometry.vx += 85
})
let Special_coin: Sprite = null
let Coin: Sprite = null
let Current_level = 0
let Geometry: Sprite = null
Geometry = sprites.create(img`
    4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 4 
    2 2 4 b b b b 2 2 b b b b 4 2 2 
    2 4 2 6 6 6 b 2 2 b 6 6 6 2 4 2 
    2 b 6 2 6 6 b 2 2 b 6 6 2 6 b 2 
    2 b 6 6 2 6 b 2 2 b 6 2 6 6 b 2 
    2 b 6 6 6 2 4 2 2 4 2 6 6 6 b 2 
    2 b b b b 4 2 2 2 2 4 b b b b 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 b b b b 4 2 2 2 2 4 b b b b 2 
    2 b 6 6 6 2 4 2 2 4 2 6 6 6 b 2 
    2 b 6 6 2 6 b 2 2 b 6 2 6 6 b 2 
    2 b 6 2 6 6 b 2 2 b 6 6 2 6 b 2 
    2 4 2 6 6 6 b 2 2 b 6 6 6 2 4 2 
    2 2 4 b b b b 2 2 b b b b 4 2 2 
    4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 4 
    `, SpriteKind.Player)
scene.setBackgroundColor(9)
Current_level = 0
nextLevel()
