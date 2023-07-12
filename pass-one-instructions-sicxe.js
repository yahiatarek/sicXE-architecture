const instructions = {
    "LDX": {
      name: "LDX",
      opcode: "04",
      format: "3",
      bytes: 3,
      cycles: 3,
      addr: {
        immediate: "1",
        direct: "2",
        indirect: "3",
        indexed: "B",
        baseRelative: "4",
        pcRelative: "9",
        extended: null
      },
      desc: "Load a value into the index register"
    },
    "LDA": {
      name: "LDA",
      opcode: "00",
      format: "3",
      bytes: 3,
      cycles: 3,
      addr: {
        immediate: "1",
        direct: "2",
        indirect: "3",
        indexed: "B",
        baseRelative: "4",
        pcRelative: "9",
        extended: null
      },
      desc: "Load a value into the accumulator"
    },
    "+LDB": {
      name: "+LDB",
      opcode: "68",
      format: "4",
      bytes: 4,
      cycles: 4,
      addr: {
        immediate: null,
        direct: "2",
        indirect: null,
        indexed: null,
        baseRelative: null,
        pcRelative: null,
        extended: null
      },
      desc: "Load a value into the B register using an extended format instruction"
    },
    "ADD": {
      name: "ADD",
      opcode: "18",
      format: "3",
      bytes: 3,
      cycles: 3,
      addr: {
        immediate: "1",
        direct: "2",
        indirect: "3",
        indexed: "B",
        baseRelative: "4",
        pcRelative: "9",
        extended: null
      },
      desc: "Add a value to the accumulator"
    },
    "TIX": {
      name: "TIX",
      opcode: "2C",
      format: "3",
      bytes: 3,
      cycles: 3,
      addr: {
        immediate: "1",
        direct: "2",
        indirect: "3",
        indexed: "B",
        baseRelative: "4",
        pcRelative: "9",
        extended: null
      },
      desc: "Increment the index register and compare it to a value"
    },
    "JLT": {
      name: "JLT",
      opcode: "38",
      format: "3",
      bytes: 3,
      cycles: 3,
      addr: {
        immediate: null,
        direct: "2",
        indirect: null,
        indexed: null,
        baseRelative: "4",
        pcRelative: "9",
        extended: null
      },
      desc: "Jump to a memory location if the last comparison was less than"
    },
    "+STA": {
      name: "+STA",
      opcode: "0C",
      format: "4",
      bytes: 4,
      cycles: 4,
      addr: {
        immediate: null,
        direct: "2",
        indirect: null,
        indexed: null,
        baseRelative: null,
        pcRelative: null,
        extended: null
      },
      desc: "Store the accumulator value in memory using an extended format instruction"
    },
    "RSUB": {
      name: "RSUB",
      opcode: "4C",
      format: "3",
      bytes: 3,
      cycles: 3,
      addr: {
        immediate: null,
        direct: null,
        indirect: null,
        indexed: null,
        baseRelative: null,
        pcRelative: null,
        extended: null
      },
      desc: "Return from subroutine"
    },
    "RESW": {
      name: "RESW",
      opcode: null,
      format: null,
      bytes: 3,
      cycles: null,
      addr: null,
      desc: "Reserve a block of memory for storing a specified number of words"
    },
    "END": {
      name: "END",
      opcode: null,
      format: null,
      bytes: 0,
      cycles: null,
      addr: null,
      desc: "End of program"
    },
    "Start": {
        name: "Start",
        opcode: null,
        format: null,
        bytes: 0,
        cycles: null,
        addr: null,
        desc: "Start of program"
      }
  };

function executeInstructionsForSicxe(inst, word) {
    if(inst === "RESW" || inst === "RESB") return parseInt(word) * instructions[inst]?.bytes;

    return "000" + instructions[inst]?.bytes;
}

module.exports = {executeInstructionsForSicxe}