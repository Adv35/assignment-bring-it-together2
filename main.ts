let counter = 0
let trips = 0
for (let index = 0; index < 10; index++) {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 40)
    basic.pause(2000)
    maqueen.motorStop(maqueen.Motors.All)
    basic.pause(1000)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 40)
    basic.pause(2000)
    maqueen.motorStop(maqueen.Motors.All)
    basic.pause(1000)
    serial.writeValue("trips", trips)
    if (trips % 3 == 0) {
        counter = 47
        for (let index = 0; index < 17; index++) {
            counter += -2
            serial.writeValue("count", counter)
        }
    }
    trips += 1
}
