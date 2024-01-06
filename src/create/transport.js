// /task

export async function sendTasks(data) {
    const response = await fetch('https://math-generator-7450.onrender.com/tasks', {
        method: 'POST',
        body: getSendTasksRequestModel(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export function getSendTasksRequestModel(check) {
    const requestModel = check.themes
        .filter(element => element.isVisible)
        .map(element => ({
            title: element.title,
            complexity: +element.selectedComplexity,
            count: +element.count || 1
        }));
    
    return JSON.stringify(requestModel);
}


