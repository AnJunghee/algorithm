function solution(n, slicer, num_list) {
    let [a, b, c] = slicer;
    switch (n) {
        case 1:
            return num_list.slice(0, b + 1);
        case 2:
            return num_list.slice(a);
        case 3:
            return num_list.slice(a, b + 1);
        case 4:
            let answer = [];
            for (let i = a; i < b + 1; i+=c) {
                answer.push(num_list[i]);
            }
            return answer;
    }
}