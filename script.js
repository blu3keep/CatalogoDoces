(function() { 
    "use strict";

    if (location.hostname !== "localhost" && location.hostname !== "127.0.0.1" && location.protocol !== 'https:') {
        location.replace(`https://${location.hostname}${location.pathname}${location.search}`);
    }

    if (window.top !== window.self) {
        window.top.location = window.self.location;
    }

    const hoje = new Date().toISOString().split('T')[0];
    const inputData = document.getElementById('data-pedido');
    if(inputData) inputData.min = hoje;

    const MINIMO_GLOBAL_NORMAIS = 50;
    const MINIMO_POR_ITEM_NORMAL = 25;

    const menu = Object.freeze([
        {
            categoria: "Brigadeiros Tradicionais",
            regraLivre: false, 
            itens: [
                { nome: "Brigadeiro Tradicional", preco: 1.35 },
                { nome: "Branquinho (Ninho)", preco: 1.35 },
                { nome: "Beijinho (Coco)", preco: 1.35 },
                { nome: "Cajuzinho", preco: 1.35 },
                { nome: "Casadinho", preco: 1.35 },
                { nome: "Palha Italiana", preco: 1.35 },
                { nome: "Napolitano", preco: 1.35 },
                { nome: "Paçoca", preco: 1.35 },
                { nome: "Nesquik", preco: 1.35 },
                { nome: "Chocolate Branco", preco: 1.35 },
                { nome: "Dois Amores", preco: 1.35 },
                { nome: "Casadinho de Morango", preco: 1.35 },
                { nome: "Prestígio", preco: 1.35 },
                { nome: "Brigadeiro c/ Caramelo", preco: 1.35 }
            ]
        },
        {
            categoria: "Brigadeiros Especiais",
            regraLivre: false,
            itens: [
                { nome: "Parmesão c/ Doce de Leite", preco: 1.70 },
                { nome: "Doce de Leite c/ Ameixa", preco: 1.70 },
                { nome: "Tortinha de Limão", preco: 1.70 },
                { nome: "Coco Queimado", preco: 1.70 },
                { nome: "Ninho c/ Nutella", preco: 1.70 },
                { nome: "Cheesecake", preco: 1.70 },
                { nome: "Oreo", preco: 1.70 },
                { nome: "Kinder", preco: 1.70 },
                { nome: "KitKat", preco: 1.70 },
                { nome: "Maracujá", preco: 1.70 },
                { nome: "Surpresa de Uva", preco: 1.70 },
                { nome: "Surpresa de Cereja", preco: 1.70 },
                { nome: "Olho de Sogra", preco: 1.70 },
                { nome: "Ferrero Rocher", preco: 1.70 },
                { nome: "Romeu e Julieta", preco: 1.70 },
                { nome: "Nozes", preco: 1.70 },
                { nome: "Red Velvet", preco: 1.70 },
                { nome: "Churros", preco: 1.70 },
                { nome: "Café c/ Doce de Leite", preco: 1.70 },
                { nome: "Confete", preco: 1.70 },
                { nome: "Kinder White", preco: 1.70 },
                { nome: "Damasco", preco: 1.70 },
                { nome: "Sensação", preco: 1.70 },
                { nome: "Abacaxi com Coco", preco: 1.70 },
                { nome: "Fini", preco: 1.70 },
                { nome: "Cajuzinho com Chocolate", preco: 1.70 },
                { nome: "Nozes com Doce de Leite", preco: 1.70 },
                { nome: "Coco com Doce de Leite", preco: 1.70 },
                { nome: "Casadinho de Cereja", preco: 1.70 },
                { nome: "Brigadeiro com Cereja", preco: 1.70 }
            ]
        },
        {
            categoria: "Doces Finos",
            regraLivre: false,
            itens: [
                { nome: "Esfera de Nutella", preco: 2.75 },
                { nome: "Esfera Doce de Leite", preco: 2.75 },
                { nome: "Pistache", preco: 2.75 },
                { nome: "Trouxinha de Damasco", preco: 2.75 },
                { nome: "Ninho c/ Choc e Cereja", preco: 2.75 },
                { nome: "Ninho c/ Choc e Uva", preco: 2.75 },
                { nome: "Amêndoas Laminadas", preco: 2.75 },
                { nome: "Box Pistache c/ Geleia", preco: 2.75 },
                { nome: "Rafaello", preco: 2.75 },
                { nome: "Caramelo Flor de Sal", preco: 2.75 },
                { nome: "Caixinha de Nuts", preco: 2.75 },
                { nome: "Ninho com Chocolate e Nozes", preco: 2.75 },
                { nome: "Ninho com Chocolate e Damasco", preco: 2.75 },
                { nome: "Box de Pistache", preco: 2.75 },
                { nome: "Gianduia com Avelã", preco: 2.75 }
            ]
        },
        {
            categoria: "Trufas / Copinhos (Tradicionais)",
            regraLivre: false,
            itens: [
                { nome: "Brigadeiro", preco: 1.75 },
                { nome: "Beijinho", preco: 1.75 },
                { nome: "Mousse de Maracujá", preco: 1.75 },
                { nome: "Mousse de Limão", preco: 1.75 },
                { nome: "Paçoca", preco: 1.75 },
                { nome: "Doce de Leite", preco: 1.75 },
                { nome: "Nesquik", preco: 1.75 },
                { nome: "Doce de Leite com Coco", preco: 1.75 },
                { nome: "Doce de Leite com Paçoca", preco: 1.75 }
            ]
        },
        {
            categoria: "Trufas / Copinhos (Especiais)",
            regraLivre: false,
            itens: [
                { nome: "Uva", preco: 2.00 },
                { nome: "Morango", preco: 2.00 },
                { nome: "Ninho com Nutella", preco: 2.00 },
                { nome: "Ovomaltine", preco: 2.00 },
                { nome: "Kinder", preco: 2.00 },
                { nome: "Cereja", preco: 2.00 },
                { nome: "Nozes", preco: 2.00 },
                { nome: "Damasco", preco: 2.00 },
                { nome: "Oreo", preco: 2.00 },
                { nome: "Maracujá com Nutella", preco: 2.00 },
                { nome: "Brigadeiro com Oreo", preco: 2.00 },
                { nome: "Baunilha com Geleia de Morango", preco: 2.00 },
                { nome: "Doce de Leite com Nozes", preco: 2.00 }
            ]
        },
        // --- CATEGORIAS ESPECIAIS (LIVRES + AVISO DE ESTOQUE) ---
        {
            categoria: "Para você ou para presentear",
            regraLivre: true, 
            itens: [
                { nome: "Caixa com 4 doces tradicionais", preco: 12.00 },
                { nome: "Caixa com 12 doces tradicionais", preco: 25.00 },
                { nome: "Caixa degustação luxo (15 un. variadas)", preco: 45.00 }
            ]
        },
        {
            categoria: "Natal Lavie",
            regraLivre: true, 
            itens: [
                { nome: "Caixinha com 4 unidades (Tradicionais)", preco: 12.00 },
                { nome: "Caixinha luxo com 4 doces (Tradicionais)", preco: 20.00 },
                { nome: "Guirlanda com 6 doces", preco: 15.00 },
                { nome: "Árvore com 6 doces", preco: 20.00 },
                { nome: "Árvore de Natal com 44 doces", preco: 70.00 },
                { nome: "Taça de uva ou morango", preco: 70.00 }
            ]
        }
    ]);

    const cart = {};

    window.toggleCategoria = function(idContainer, idSeta) {
        const container = document.getElementById(idContainer);
        const seta = document.getElementById(idSeta);
        const titulo = seta.parentElement;

        if (container.classList.contains('oculto')) {
            container.classList.remove('oculto'); 
            titulo.classList.remove('fechado'); 
        } else {
            container.classList.add('oculto'); 
            titulo.classList.add('fechado'); 
        }
    };

    window.renderMenu = function() {
        const menuContainer = document.getElementById('menu-container');
        
        menu.forEach((grupo, index) => {
            const section = document.createElement('div');
            const idContainer = `cat-items-${index}`;
            const idSeta = `cat-seta-${index}`;

            section.innerHTML = `
                <div class="categoria-titulo fechado" onclick="toggleCategoria('${idContainer}', '${idSeta}')">
                    ${grupo.categoria}
                    <span id="${idSeta}" class="seta-collapse">▼</span>
                </div>
                <div id="${idContainer}" class="itens-container oculto">
                </div>
            `;
            
            const itemsContainerDiv = section.querySelector(`#${idContainer}`);

            grupo.itens.forEach(item => {
                const id = item.nome.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9]/g, '-').toLowerCase();
                
                if(!cart[id]) {
                    cart[id] = { 
                        id: id, 
                        nome: item.nome, 
                        preco: item.preco, 
                        qtd: 0, 
                        catIndex: index 
                    };
                }

                const card = document.createElement('div');
                card.className = 'item-card';
                card.id = `card-${id}`;
                card.innerHTML = `
                    <div class="item-info">
                        <h3>${item.nome}</h3>
                        <p>R$ ${item.preco.toFixed(2)} uni</p>
                    </div>
                    <div class="controls">
                        <button class="btn-qty" onclick="changeQty('${id}', -1)">-</button>
                        <input type="number" id="qty-${id}" class="qty-input" value="0" min="0" 
                               oninput="manualInput('${id}', this.value)" 
                               onfocus="this.select()">
                        <button class="btn-qty" onclick="changeQty('${id}', 1)">+</button>
                    </div>
                `;
                itemsContainerDiv.appendChild(card);
            });
            
            menuContainer.appendChild(section);
        });
    };

    window.changeQty = function(id, delta) {
        const input = document.getElementById(`qty-${id}`);
        let novoValor = parseInt(input.value) + delta;
        if (novoValor < 0) novoValor = 0;
        input.value = novoValor;
        processChange(id, novoValor);
    };

    window.manualInput = function(id, valor) {
        let novoValor = parseInt(valor);
        if (isNaN(novoValor) || novoValor < 0) novoValor = 0;
        processChange(id, novoValor);
    };

    function processChange(id, qtd) {
        cart[id].qtd = qtd;
        const card = document.getElementById(`card-${id}`);
        
        const categoria = menu[cart[id].catIndex];
        const ehLivre = categoria.regraLivre === true;

        if (qtd > 0) {
            if (!ehLivre && qtd < MINIMO_POR_ITEM_NORMAL) {
                card.style.borderLeft = "5px solid #f0ad4e"; 
                card.classList.add('selected'); 
            } else {
                card.style.borderLeft = "5px solid #c08081"; 
                card.classList.add('selected');
            }
        } else {
            card.style.borderLeft = "5px solid transparent";
            card.classList.remove('selected');
        }
        
        updateTotal();
    }

    function buscarItemNoMenu(idProcurado) {
        for (let grupo of menu) {
            for (let item of grupo.itens) {
                const idGerado = item.nome.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9]/g, '-').toLowerCase();
                if (idGerado === idProcurado) return item;
            }
        }
        return null;
    }

    function updateTotal() {
        let totalValor = 0;
        let totalItensNormais = 0; 
        let temAlgumItem = false;

        for (let id in cart) {
            if (cart[id].qtd > 0) {
                const itemOriginal = buscarItemNoMenu(id);
                const precoReal = itemOriginal ? itemOriginal.preco : 0;
                
                totalValor += cart[id].qtd * precoReal;
                temAlgumItem = true;

                const categoria = menu[cart[id].catIndex];
                if (!categoria.regraLivre) {
                    totalItensNormais += cart[id].qtd;
                }
            }
        }
        
        let totalItensGeral = 0;
        for(let id in cart) totalItensGeral += cart[id].qtd;

        document.getElementById('total-price').innerText = `Total: R$ ${totalValor.toFixed(2)} (${totalItensGeral} itens)`;
        
        const btn = document.getElementById('btn-checkout');
        const avisosDiv = document.getElementById('avisos-container');
        let listaErros = [];

        for (let id in cart) {
            if (cart[id].qtd > 0) {
                const categoria = menu[cart[id].catIndex];
                if (!categoria.regraLivre && cart[id].qtd < MINIMO_POR_ITEM_NORMAL) {
                    listaErros.push(`• ${cart[id].nome}: mínimo ${MINIMO_POR_ITEM_NORMAL} un.`);
                }
            }
        }

        if (totalItensNormais > 0 && totalItensNormais < MINIMO_GLOBAL_NORMAIS) {
            const falta = MINIMO_GLOBAL_NORMAIS - totalItensNormais;
            listaErros.push(`• Doces tradicionais/finos: mínimo ${MINIMO_GLOBAL_NORMAIS} un. (Faltam ${falta})`);
        }

        if (listaErros.length > 0) {
            btn.classList.add('btn-disabled');
            btn.onclick = null;
            avisosDiv.style.display = 'block';
            avisosDiv.innerHTML = `<strong>Atenção:</strong><br>${listaErros.join('<br>')}`;
        } else {
            avisosDiv.style.display = 'none';
            if (temAlgumItem) {
                btn.classList.remove('btn-disabled');
                btn.onclick = finalizarPedido;
            } else {
                btn.classList.add('btn-disabled');
                btn.onclick = null;
            }
        }
    }

    window.toggleEndereco = function(show) {
        const enderecoContainer = document.getElementById('endereco-container');
        if (show) {
            enderecoContainer.style.display = 'block';
        } else {
            enderecoContainer.style.display = 'none';
            document.getElementById('endereco').value = '';
        }
    };

    window.limparTudo = function() {
        document.getElementById('cliente-nome').value = '';
        document.getElementById('endereco').value = '';
        document.getElementById('observacoes').value = '';
        document.getElementById('data-pedido').value = '';

        document.querySelectorAll('input[type="radio"]').forEach(el => el.checked = false);
        document.querySelectorAll('input[type="checkbox"]').forEach(el => el.checked = false);

        toggleEndereco(false);

        for (let id in cart) {
            cart[id].qtd = 0;
            const input = document.getElementById(`qty-${id}`);
            if(input) input.value = 0;
            
            const card = document.getElementById(`card-${id}`);
            if(card) {
                card.classList.remove('selected');
                card.style.borderLeft = "5px solid transparent";
            }
        }

        updateTotal();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    function sanitizarInput(texto) {
        if (!texto) return "";
        return texto.replace(/<[^>]*>?/gm, '').trim();
    }

    window.finalizarPedido = function() {
        const nomeCliente = sanitizarInput(document.getElementById('cliente-nome').value);
        const endereco = sanitizarInput(document.getElementById('endereco').value);
        const observacoes = sanitizarInput(document.getElementById('observacoes').value);
        const dataPedido = document.getElementById('data-pedido').value;

        if (!nomeCliente) {
            alert("Por favor, digite seu nome no topo da página.");
            window.scrollTo(0,0);
            return;
        }

        const opcaoEntrega = document.querySelector('input[name="entrega"]:checked');
        if (!opcaoEntrega) {
            alert("Selecione a forma de entrega/retirada!");
            return;
        }
        
        if (!dataPedido) {
            alert("Por favor, selecione a Data para o pedido.");
            return;
        }

        if (opcaoEntrega.value === 'Entrega' && !endereco) {
            alert("Digite o endereço para entrega!");
            return;
        }

        const pagamentos = [];
        document.querySelectorAll('input[name="pagamento"]:checked').forEach(c => pagamentos.push(c.value));
        
        if (pagamentos.length === 0) {
            alert("Selecione a forma de pagamento!");
            return;
        }

        const dataFormatada = dataPedido.split('-').reverse().join('/');
        const numeroPedido = Math.floor(10000 + Math.random() * 90000);

        let temItemEstoque = false;
        for(let id in cart) {
            if(cart[id].qtd > 0 && menu[cart[id].catIndex].regraLivre) {
                temItemEstoque = true;
                break;
            }
        }

        let mensagem = `*SOLICITAÇÃO DE PEDIDO #${numeroPedido}*\n`; 
        
        if (temItemEstoque) {
            mensagem += `(Sujeito a conferência de valores, data e disponibilidade de estoque)\n\n`;
        } else {
            mensagem += `(Sujeito a conferência de valores e disponibilidade de data)\n\n`;
        }

        mensagem += `*Cliente:* ${nomeCliente}\n`;
        mensagem += `*Para:* ${dataFormatada}\n\n`;
        
        let totalGeral = 0;
        let totalItens = 0;

        menu.forEach((grupo, index) => {
            let itensCategoria = [];
            for (let id in cart) {
                if (cart[id].catIndex === index && cart[id].qtd > 0) {
                    itensCategoria.push(cart[id]);
                }
            }

            if (itensCategoria.length > 0) {
                mensagem += `*--- ${grupo.categoria} ---*\n`;
                itensCategoria.forEach(item => {
                    const itemOriginal = buscarItemNoMenu(item.id);
                    const precoReal = itemOriginal ? itemOriginal.preco : 0;
                    
                    const subtotal = item.qtd * precoReal;
                    totalGeral += subtotal;
                    totalItens += item.qtd;
                    mensagem += `${item.qtd}x ${item.nome} (R$ ${subtotal.toFixed(2)})\n`;
                });
                mensagem += `\n`;
            }
        });

        mensagem += `*Resumo:*\n`;
        mensagem += `Itens: ${totalItens} un.\n`;
        mensagem += `*TOTAL ESTIMADO: R$ ${totalGeral.toFixed(2)}*\n`;
        mensagem += `--------------------------------\n`;
        
        if (opcaoEntrega.value === 'Entrega') {
            mensagem += `*Entrega:* Sim (Endereço abaixo)\n`;
            mensagem += `${endereco}\n`;
        } else {
            mensagem += `*Retirada:* No local (São Pedro)\n`;
        }

        mensagem += `*Pagamento:* ${pagamentos.join(' + ')}\n`;
        
        if (observacoes) {
            mensagem += `*Obs:* ${observacoes}\n`;
        }

        mensagem += `*Nota:* Ciente do sinal de 50%.\n`;

        const telefoneDestino = "5521965293615"; 
        
        const url = `https://wa.me/${telefoneDestino}?text=${encodeURIComponent(mensagem)}`;
        
        window.open(url, '_blank', 'noopener,noreferrer');

        setTimeout(limparTudo, 1500);
    };

    window.renderMenu();

})();