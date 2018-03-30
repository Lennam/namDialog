function namDialog() {
    let header, body, namDialogEle, methodId;
    function initNamDialog() {
        const ele = `
            <div id="namDialog">
                <div class="namDialog-box">
                    <h3 class="namDialog-header">${header}</h3>
                    <div class="namDialog-body">
                        ${body}
                    </div>
                    <div class="namDialog-footer">
                        <button class="namDialog-btn namConfirm-btn">确认</button>
                        <button class="namDialog-btn namCancel-btn">取消</button>
                    </div>
                </div>
            </div>
        `;
        document.body.innerHTML += ele;
        namDialogEle = document.querySelector('#namDialog');
    }
    
    document.body.addEventListener('click', function (e) {
        const target = e.target;
        if (target.className.includes('showNamDialog-btn')) {
            methodId = target.dataset.fn.toString();
            header = target.dataset.namheader.toString();
            body = target.dataset.namvalue.toString();
            if (!namDialogEle) {
                initNamDialog();
                namDialogEle.style.display = 'flex';
            } else {
                namDialogEle.style.display = 'flex';
                const headerEle = document.querySelector('.namDialog-header');
                const bodyEle = document.querySelector('.namDialog-body');
                headerEle.innerHTML = header;
                bodyEle.innerHTML = body;
            }

        }
        if (target.className.includes('namConfirm-btn')) {
            namDialogEle.style.display = 'none';
            API[methodId] ? API[methodId].confirmFn() : undefined;
        }
        if (target.className.includes('namCancel-btn')) {
            namDialogEle.style.display = 'none';
            API[methodId] ? API[methodId].cancelFn() : undefined;
        }
    })

    function setBtnFunc(selector, confirmFn, cancelFn) {
        API[selector] = {
            confirmFn: confirmFn,
            cancelFn: cancelFn
        }
    }
    const API = {
        set: setBtnFunc
    }
    return API
};