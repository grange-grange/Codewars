//not works

function chooseBestSum(t, k, ls) {
    if (ls.length < k) {
      return null;
    }
  
  let arr = [];
  
   if (k === 1) {
     for (let i = 0; i <= ls.length - k; i++) {  
        if (ls[i] <= t) {
          arr.push(ls[i]);            
        }        
      }
   } else if (k === 2) {
     for (let i = 0; i <= ls.length - k; i++) {
        for (let j = i + 1; j <= ls.length - k + 1; j++) {          
            let sum = ls[i] + ls[j];
            if (sum <= t) {
              arr.push(sum);            
          }
        }
      }
    } else if (k === 3) {
     for (let i = 0; i <= ls.length - k; i++) {
        for (let j = i + 1; j <= ls.length - k + 1; j++) {
          for (let l = j + 1; l <= ls.length - k + 2; l++) {
            let sum = ls[i] + ls[j] + ls[l];
            if (sum <= t) {
              arr.push(sum);
            }
          }
        }
      }
    } else if (k === 4) {
     for (let i = 0; i <= ls.length - k; i++) {
        for (let j = i + 1; j <= ls.length - k + 1; j++) {
          for (let l = j + 1; l <= ls.length - k + 2; l++) {
            for (let m = l + 1; m <= ls.length - k + 3; m++) {
              let sum = ls[i] + ls[j] + ls[l] + ls[m];
              if (sum <= t) {
                arr.push(sum);
              }
            }
          }
        }
      }
    } else if (k === 5) {
     for (let i = 0; i <= ls.length - k; i++) {
        for (let j = i + 1; j <= ls.length - k + 1; j++) {
          for (let l = j + 1; l <= ls.length - k + 2; l++) {
            for (let m = l + 1; m <= ls.length - k + 3; m++) {
              for (let n = m + 1; n <= ls.length - k + 4; n++) {
                let sum = ls[i] + ls[j] + ls[l] + ls[m] + ls[n];
                if (sum <= t) {
                  arr.push(sum);
                }
              }
            }
          }
        }
      }
    } else if (k === 6) {
     for (let i = 0; i <= ls.length - k; i++) {
        for (let j = i + 1; j <= ls.length - k + 1; j++) {
          for (let l = j + 1; l <= ls.length - k + 2; l++) {
            for (let m = l + 1; m <= ls.length - k + 3; m++) {
              for (let n = m + 1; n <= ls.length - k + 4; n++) {
                for (let o = n + 1; o <= ls.length - k + 5; o++) {
                  let sum = ls[i] + ls[j] + ls[l] + ls[m] + ls[n] + ls[o];
                  if (sum <= t) {
                    arr.push(sum);
                  }
                }
              }
            }
          }
        }
      }
    } else if (k === 7) {
     for (let i = 0; i <= ls.length - k; i++) {
        for (let j = i + 1; j <= ls.length - k + 1; j++) {
          for (let l = j + 1; l <= ls.length - k + 2; l++) {
            for (let m = l + 1; m <= ls.length - k + 3; m++) {
              for (let n = m + 1; n <= ls.length - k + 4; n++) {
                for (let o = n + 1; o <= ls.length - k + 5; o++) {
                  for (let p = o + 1; p <= ls.length - k + 6; p++) {
                    let sum = ls[i] + ls[j] + ls[l] + ls[m] + ls[n] + ls[o] + ls[p];
                    if (sum <= t) {
                      arr.push(sum);
                    }
                  }
                }
              }
            }
          }
        }
      }
    } else if (k === 8) {
     for (let i = 0; i <= ls.length - k; i++) {
        for (let j = i + 1; j <= ls.length - k + 1; j++) {
          for (let l = j + 1; l <= ls.length - k + 2; l++) {
            for (let m = l + 1; m <= ls.length - k + 3; m++) {
              for (let n = m + 1; n <= ls.length - k + 4; n++) {
                for (let o = n + 1; o <= ls.length - k + 5; o++) {
                  for (let p = o + 1; p <= ls.length - k + 6; p++) {
                    for (let q = p + 1; q <= ls.length - k + 7; q++) {
                      let sum = ls[i] + ls[j] + ls[l] + ls[m] + ls[n] + ls[o] + ls[p] + ls[q];
                      if (sum <= t) {
                        arr.push(sum);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    } else if (k === 9) {
     for (let i = 0; i <= ls.length - k; i++) {
        for (let j = i + 1; j <= ls.length - k + 1; j++) {
          for (let l = j + 1; l <= ls.length - k + 2; l++) {
            for (let m = l + 1; m <= ls.length - k + 3; m++) {
              for (let n = m + 1; n <= ls.length - k + 4; n++) {
                for (let o = n + 1; o <= ls.length - k + 5; o++) {
                  for (let p = o + 1; p <= ls.length - k + 6; p++) {
                    for (let q = p + 1; q <= ls.length - k + 7; q++) {
                      for (let r = q + 1; r <= ls.length - k + 8; r++) {
                        let sum = ls[i] + ls[j] + ls[l] + ls[m] + ls[n] + ls[o] + ls[p] + ls[q] + ls[r];
                        if (sum <= t) {
                          arr.push(sum);
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    } else if (k === 10) {
     for (let i = 0; i <= ls.length - k; i++) {
        for (let j = i + 1; j <= ls.length - k + 1; j++) {
          for (let l = j + 1; l <= ls.length - k + 2; l++) {
            for (let m = l + 1; m <= ls.length - k + 3; m++) {
              for (let n = m + 1; n <= ls.length - k + 4; n++) {
                for (let o = n + 1; o <= ls.length - k + 5; o++) {
                  for (let p = o + 1; p <= ls.length - k + 6; p++) {
                    for (let q = p + 1; q <= ls.length - k + 7; q++) {
                      for (let r = q + 1; r <= ls.length - k + 8; r++) {
                        for (let s = r + 1; s <= ls.length - k + 9; s++) {
                          let sum = ls[i] + ls[j] + ls[l] + ls[m] + ls[n] + ls[o] + ls[p] + ls[q] + ls[r] + ls[s];
                          if (sum <= t) {
                            arr.push(sum);
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    } else if (k === 11) {
     for (let i = 0; i <= ls.length - k; i++) {
        for (let j = i + 1; j <= ls.length - k + 1; j++) {
          for (let l = j + 1; l <= ls.length - k + 2; l++) {
            for (let m = l + 1; m <= ls.length - k + 3; m++) {
              for (let n = m + 1; n <= ls.length - k + 4; n++) {
                for (let o = n + 1; o <= ls.length - k + 5; o++) {
                  for (let p = o + 1; p <= ls.length - k + 6; p++) {
                    for (let q = p + 1; q <= ls.length - k + 7; q++) {
                      for (let r = q + 1; r <= ls.length - k + 8; r++) {
                        for (let s = r + 1; s <= ls.length - k + 9; s++) {
                          for (let u = s + 1; u <= ls.length - k + 10; u++) {
                            let sum = ls[i] + ls[j] + ls[l] + ls[m] + ls[n] + ls[o] + ls[p] + ls[q] + ls[r] + ls[s] + ls[u];
                            if (sum <= t) {
                              arr.push(sum);
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    } else if (k === 12) {
     for (let i = 0; i <= ls.length - k; i++) {
        for (let j = i + 1; j <= ls.length - k + 1; j++) {
          for (let l = j + 1; l <= ls.length - k + 2; l++) {
            for (let m = l + 1; m <= ls.length - k + 3; m++) {
              for (let n = m + 1; n <= ls.length - k + 4; n++) {
                for (let o = n + 1; o <= ls.length - k + 5; o++) {
                  for (let p = o + 1; p <= ls.length - k + 6; p++) {
                    for (let q = p + 1; q <= ls.length - k + 7; q++) {
                      for (let r = q + 1; r <= ls.length - k + 8; r++) {
                        for (let s = r + 1; s <= ls.length - k + 9; s++) {
                          for (let u = s + 1; u <= ls.length - k + 10; u++) {
                            for (let v = u + 1; v <= ls.length - k + 11; v++) {
                              let sum = ls[i] + ls[j] + ls[l] + ls[m] + ls[n] + ls[o] + ls[p] + ls[q] + ls[r] + ls[s] + ls[u] + ls[v];
                              if (sum <= t) {
                                arr.push(sum);
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    } else if (k === 13) {
     for (let i = 0; i <= ls.length - k; i++) {
        for (let j = i + 1; j <= ls.length - k + 1; j++) {
          for (let l = j + 1; l <= ls.length - k + 2; l++) {
            for (let m = l + 1; m <= ls.length - k + 3; m++) {
              for (let n = m + 1; n <= ls.length - k + 4; n++) {
                for (let o = n + 1; o <= ls.length - k + 5; o++) {
                  for (let p = o + 1; p <= ls.length - k + 6; p++) {
                    for (let q = p + 1; q <= ls.length - k + 7; q++) {
                      for (let r = q + 1; r <= ls.length - k + 8; r++) {
                        for (let s = r + 1; s <= ls.length - k + 9; s++) {
                          for (let u = s + 1; u <= ls.length - k + 10; u++) {
                            for (let v = u + 1; v <= ls.length - k + 11; v++) {
                              for (let w = v + 1; w <= ls.length - k + 12; w++) {
                                let sum = ls[i] + ls[j] + ls[l] + ls[m] + ls[n] + ls[o] + ls[p] + ls[q] + ls[r] + ls[s] + ls[u] + ls[v] + ls[w];
                                if (sum <= t) {
                                  arr.push(sum);
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  
    
    

    if (arr.length === 0) {
      return null;
    } else {
      return Math.max(...arr);
    }
}