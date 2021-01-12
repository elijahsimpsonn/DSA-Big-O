// The Tower of Hanoi is a very famous mathematical puzzle (some call it game!). This is how it goes: 

// There are three rods and a number of disks of different sizes which can slide onto any rod. 
// The puzzle starts with the disks neatly stacked in ascending order of size on one rod, the smallest disk at the top (making a conical shape). 
// The other two rods are empty to begin with.

// The goal of the puzzle is to move the entire stack of rods to another rod (can't be the original rod where it was stacked before) where it will be stacked in the ascending order as well. This should be done obeying the following rules: 
// i) Only one disk may be moved at a time 
// ii) Each move consists of taking the upper disk from one of the rods and sliding it onto another rod, on top of the other disks that may already be present on that rod. 
// iii) A larger disk may not placed on top of a smaller disk


// Derive an algorithm to solve the Tower of Hanoi puzzle.
// Implement your algorithm using recursion. Your program should display each movement of the disk from one rod to another.
// If you are given 5 disks, how do the rods look like after 7 recursive calls?
// How many moves are needed to complete the puzzle with 3 disks? with 4 disks? with 5 disks?
// What is the runtime of your algorithm?


hanoi = (source, dest, extra, disk, count = 0) => {
    // Base/Terminating Condition
    if(disk <= 0) {
        return
    }
    // Recursion Case
    hanoi(source, extra, dest, disk - 1)   
    console.log(`${count} Move Disk -${disk} from ${source} to ${dest}`)
    hanoi(extra, dest, source, disk - 1)    

}

console.log(hanoi('Source', 'Destination', 'Extra', 5))



// Using 5 disc, after 7 recursive calls, the Source peg still has disc 4 and 5, the Extra peg is empty, and the Dest peg has disc has disc 1, 2, and 3
// 1 - Move Disk -1 from Source to Destination
// 2 - Move Disk -2 from Source to Extra
// 3 - Move Disk -1 from Destination to Extra
// 4 - Move Disk -3 from Source to Destination
// 5 - Move Disk -1 from Extra to Source
// 6 - Move Disk -2 from Extra to Destination
// 7 - Move Disk -1 from Source to Destination

//7 moves with 3 disc, 15 moves with 4 disc, and 31 moves with 5 disc.

// Exponential Time (O(2^n)), which has running times that grow rapidly with any increase in input size.
// With 3 disc it takes 7 moves, but when we add just 1 extra disc, we jump up to 15 moves, so more than double. 