/**
 * 定义一个function 将数组转化成树
 * 
 */

function arrayToTree(arr) {
    
    const map = new Map();
    for (const item of arr) {
        map.set(item.id, item);
    }

    const roots = [];
    for (const item of arr) {
        // find item's parent node
        if (item.parent === null) {
            roots.push(item)
        } else {
            const parent = map.get(item.parent);
            if (!parent.children) {
                parent.children = [];
            }
            parent.children.push(item);
        }
    }
    console.log(roots);
    return roots;
}

arrayToTree([
    {id: 1, value: 1, parent: null},
    {id: 2, value: 2, parent: 1},
    {id: 3, value: 3, parent: 2},
    {id: 4, value: 4, parent: 1},
])