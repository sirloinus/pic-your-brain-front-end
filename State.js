class State {
    static init() {
        this.userId = ''
        this.userName = ''
        this.category = ''
        this.categoryId = ''
        this.images16 = []
        this.images32 = []
        this.points = 0
        this.gridData = []
        this.listData = []
        this.selectedData = []
        this.currentLevel = 1
        this.overallPenalties = 0
        this.penalties1 = 0
        this.penalties2 = 0
        this.penalties3 = 0
        this.penalties4 = 0
        this.currentLevelIndexesArray = []
        this.level1Time = 0
        this.level2Time = 0
        this.level3Time = 0
        this.level4Time = 0
        this.overallTime = 0
        this.startTime = 0
        this.finishTime = 0
        this.times = []
    }

    setUser(name) {
        this.userName = name
    }
}

State.init()
