describe('File Upload', () => {

    // cypress-file-upload plugin yuklemeliyiz
    //npm install --save-dev cypress-file-upload
    // import 'cypress-file-upload';

    it('Single File Upload', () => {

        //tek bir fotoğraf dosyası yüklemek için 

        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        const path1= "cypressfoto.png"
        cy.get('#filesToUpload').attachFile(path1)
        cy.get('#fileList > li').should('include.text','cypressfoto')    
    });

    it('Multiple File Upload 1', () => {

        //Aynı anda birden fazla fotoğraf dosyası yüklemek için 
        // 1.YOL:
        
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        const files = [
            { filePath: 'cypressfoto.png', fileName: 'cypressfoto.png' },
            { filePath: 'cypressio_logo.jpeg', fileName: 'cypressio_logo.jpeg' },
            { filePath: 'cypressLOGO.webp', fileName: 'cypressLOGO.webp' },
            { filePath: 'cypresstitle.jpeg', fileName: 'cypresstitle.jpeg' }
        ];
    
        cy.get('#filesToUpload').attachFile(files);
        cy.get('#fileList > li').should('have.length', 4);
    });


    it('Multiple File Upload 2', () => {

        //Aynı anda birden fazla fotoğraf dosyası yüklemek için 
        // 2.YOL:  

        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        const files = [
            'cypressfoto.png',
            'cypressio_logo.jpeg',
            'cypressLOGO.webp',
            'cypresstitle.jpeg'
        ];
        cy.get('#filesToUpload').attachFile(files);
        cy.get('#fileList > li').should('have.length', 4); 

    });

    it('Multiple File Upload 3', () => {

        //Aynı anda birden fazla fotoğraf dosyası yüklemek için 
        // 3.YOL:        

        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        const path1= "cypressfoto.png"
        const path2="cypressio_logo.jpeg"
        const path3="cypressLOGO.webp"
        const path4="cypresstitle.jpeg"
        cy.get('#filesToUpload').attachFile([path1, path2, path3,path4])
    });
});