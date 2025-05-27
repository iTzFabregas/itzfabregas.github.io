import { useState } from "react";
import { preencherTemplateBoby, preencherTemplateSubj } from "./template/template"

function App() {

    const [bodyCopied, setBodyCopied] = useState(false)
    const [subjCopied, setSubjCopied] = useState(false)

    const [subjCopy, setSubjCopy] = useState("")
    const [bodyCopy, setBodyCopy] = useState("")

    const [opcaoContato, setOpcaoContato] = useState("");
    const [opcaoPronome, setOpcaoPronome] = useState("");
    const [nomeSemcomper, setNomeSemcomper] = useState("");
    const [nomeEmpresa, setNomeEmpresa] = useState("");
    const [nomePessoa, setNomePessoa] = useState("");

    const [flag, setFlag] = useState(0);

    const gerarTemplate = () => {

        if (opcaoContato === "" ||
            opcaoPronome === "" ||
            nomeSemcomper === "" ||
            nomeEmpresa === "" ||
            nomePessoa === "") {
                setFlag(400)
                return
        }

        setSubjCopy(preencherTemplateSubj(opcaoContato))

        setBodyCopy(preencherTemplateBoby(opcaoContato, {
            nomePessoa: nomePessoa,
            nomeSemcomper: nomeSemcomper,
            nomeEmpresa: nomeEmpresa,
            artigo: opcaoPronome
        }))

        setFlag(500)
        return
    }
    
    
    const handleSubjCopy = () => {
        navigator.clipboard.writeText(subjCopy)
        setSubjCopied(true)
        setTimeout(() => setSubjCopied(false), 3000)
    }

    const handleBodyCopy = () => {
        navigator.clipboard.writeText(bodyCopy)
        setBodyCopied(true)
        setTimeout(() => setBodyCopied(false), 3000)
    }

    return (
        <div className="relative h-fit sm:h-screen w-full overflow-hidden">
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: "url('./IMG_3395.JPG')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "blur(8px)"
                }}
            />

            <div className="relative z-10 flex items-center justify-center w-full h-full">
                <div className="m-5 flex flex-col gap-6 bg-slate-100 p-5 md:p-6 lg:p-7 xl:p-8 rounded-3xl shadow-md h-fit w-[90%] md:w-[80%] lg:w-[60%] 2xl:w-[45%]">

                    {/* HEADER */}
                    <div className="flex justify-between items-center mb-5 gap-5">
                        <img src="./logo.png" alt="Semcomp" className=" w-[30%] sm:w-[20%] md:w-[15%]" />
                        <p className="font-bold text-2xl sm:text-3xl text-[#0D2455]">Template Contato Patrocínios</p>
                        <p></p>
                    </div>

                    {/* NOME DO SEMCOMPER */}
                    <div className="flex flex-col">
                        <label className="font-semibold text-[#0D2455]">Seu nome</label>
                        <input
                            class="mt-3 w-[80%] xl:w-1/2 rounded-full px-8 py-2 border-2 border-transparent focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-all duration-300 shadow-md"
                            placeholder="Seu nome"
                            required=""
                            type="text"
                            onChange={(e) => setNomeSemcomper(e.target.value)}
                        />
                    </div>

                    {/* NOME DA EMPRESA */}
                    <div className="flex flex-col">
                        <label className="font-semibold text-[#0D2455]">Nome da empresa</label>
                        <input
                            class="mt-3 w-[80%] xl:w-1/2 rounded-full px-8 py-2 border-2 border-transparent focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-all duration-300 shadow-md"
                            placeholder="Nome da empresa"
                            required=""
                            type="text"
                            onChange={(e) => setNomeEmpresa(e.target.value)}
                        />
                    </div>

                    {/* PRONOME DA EMPRESA */}
                    <fieldset className="flex flex-col gap-2">
                        <legend className="font-semibold text-[#0D2455]">Artigo da empresa</legend>

                        <div className="flex flex-col sm:flex-row gap-5 sm:gap-10 mt-3">
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="pronome"
                                    value="a"
                                    checked={opcaoPronome === "a"}
                                    onChange={(e) => setOpcaoPronome(e.target.value)}
                                />
                                Artigo <strong>'a'</strong> (Ex: a Amazon)
                            </label>

                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="pronome"
                                    value="o"
                                    checked={opcaoPronome === "o"}
                                    onChange={(e) => setOpcaoPronome(e.target.value)}
                                />
                                Artigo <strong>'o'</strong> (Ex: o Google)
                            </label>
                        </div>
                    </fieldset>

                    {/* NOME DA PESSOA */}
                    <div className="flex flex-col">
                        <label className="font-semibold text-[#0D2455]">Nome da pessoa</label>
                        <input
                            class="mt-3 w-[80%] xl:w-1/2 rounded-full px-8 py-2 border-2 border-transparent focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-all duration-300 shadow-md"
                            placeholder="Nome da pessoa"
                            required=""
                            type="text"
                            onChange={(e) => setNomePessoa(e.target.value)}
                        />
                    </div>

                    {/* QUAL O CONTATO */}
                    <fieldset className="flex flex-col gap-2">
                        <legend className="font-semibold text-[#0D2455]">Qual o tipo de contato</legend>

                        <div className="grid grid-cols-1 sm:grid-cols-2 mt-3">
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="contato"
                                    value="1"
                                    checked={opcaoContato === "1"}
                                    onChange={(e) => setOpcaoContato(e.target.value)}
                                />
                                Primeiro Contato <strong>Email</strong>
                            </label>

                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="contato"
                                    value="2"
                                    checked={opcaoContato === "2"}
                                    onChange={(e) => setOpcaoContato(e.target.value)}
                                />
                                Segundo Contato
                            </label>
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="contato"
                                    value="3"
                                    checked={opcaoContato === "3"}
                                    onChange={(e) => setOpcaoContato(e.target.value)}
                                />
                                Primeiro Contato <strong>LinkedIn</strong> (Curto)
                            </label>
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="contato"
                                    value="4"
                                    checked={opcaoContato === "4"}
                                    onChange={(e) => setOpcaoContato(e.target.value)}
                                />
                                Primeito Contato <strong>LinkedIn</strong> (Longo)
                            </label>
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="contato"
                                    value="5"
                                    checked={opcaoContato === "5"}
                                    onChange={(e) => setOpcaoContato(e.target.value)}
                                />
                                <strong>Primeira</strong> Cobrança de Resposta
                            </label>
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="contato"
                                    value="6"
                                    checked={opcaoContato === "6"}
                                    onChange={(e) => setOpcaoContato(e.target.value)}
                                />
                                <strong>Segunda</strong> Cobrança de Resposta
                            </label>
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="contato"
                                    value="7"
                                    checked={opcaoContato === "7"}
                                    onChange={(e) => setOpcaoContato(e.target.value)}
                                />
                                <strong>Terceira</strong> Cobrança de Resposta
                            </label>
                        </div>
                    </fieldset>
                    <div className="flex justify-center w-full">
                        <button className="w-[80%] bg-[#0D2455] text-white py-2 rounded-3xl shadow-md transition-all duration-200 hover:scale-105" onClick={gerarTemplate}>Gerar template</button>
                    </div>
                </div>

                {flag === 400 &&
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                        <div className="reltive bg-white p-4 rounded-lg max-w-md w-full m-4">
                            <div className="relative flex items-center justify-between">
                                <img src="./logo.png" alt="Semcomp" className="w-[10%]" />
                                <p className="font-bold text-xl text-[#0D2455]">ERRO!</p>
                                <button 
                                    className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
                                    onClick={() => setFlag(0)}>
                                        X
                                </button>
                            </div>
                            <div>
                                <p className="mt-5">Complete <strong>TODOS</strong> os campos antes de gerar o template!</p>
                                <p>Caso não seja necessário coloque um "_".</p>
                            </div>
                        </div>
                    </div>
                }

                {flag === 500 &&
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                        <div className="bg-white p-4 rounded-lg max-w-md w-full relative m-5 ">
                            <div className="flex gap-12 items-center justify-between">
                                <img src="./logo.png" alt="Semcomp" className="w-[10%]" />
                                <p className="font-bold text-sm sm:text-xl text-[#0D2455]">TEMPLATES GERADOS</p>
                                <button 
                                    className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
                                    onClick={() => setFlag(0)}>
                                        X
                                </button>
                            </div>
                            <div className="mt-6 flex flex-col items-center gap-5">
                                <div>
                                    <strong>ATENÇÃO</strong>: Antes de enviar o email, de uma lida e verifique se <strong>TODOS</strong> campos estão completos e corretos.
                                </div>

                                <button className="w-[60%] bg-[#0D2455] text-white py-2 rounded-3xl shadow-md transition-all duration-200 hover:scale-105" onClick={handleSubjCopy}>Copiar Assunto</button>

                                {subjCopied && 
                                    <div className="bg-green-500 text-xs font-medium py-1 px-3 rounded-lg text-white animate-bounce">Copiado!</div>
                                }

                                <button className="w-[60%] bg-[#0D2455] text-white py-2 rounded-3xl shadow-md transition-all duration-200 hover:scale-105" onClick={handleBodyCopy}>Copiar Email</button>

                                {bodyCopied && 
                                    <div className="bg-green-500 text-xs font-medium py-1 px-3 rounded-lg text-white animate-bounce">Copiado!</div>
                                }
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}


export default App;
