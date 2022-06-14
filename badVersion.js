 function(n) {
       
    let start=0;
    let end=n-1
    while (start <= end) {
const mid = Math.floor((start + end) / 2);
       if(!isBadVersion(mid))
            start=mid+1;
        else 
            end=mid-1;
    }
    return start;
};
