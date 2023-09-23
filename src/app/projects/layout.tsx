'use client'

import './page.scss';
import { useState } from 'react';
import data from './projects.json';

import IconAngular from '@/components/icons/filters/IconAngular';
import IconJava from '@/components/icons/filters/IconJava';
import IconNext from '@/components/icons/filters/IconNextJs';
import IconNuxt from '@/components/icons/filters/IconNuxt';
import IconReact from '@/components/icons/filters/IconReact';
import IconSpring from '@/components/icons/filters/IconSpring';
import IconVue from '@/components/icons/filters/IconVueJs';
import IconGithub from '@/components/icons/socials/IconGithub';


export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [categoriasSelecionadas, setCategoriasSelecionadas] :any[] = useState([]);
  const [itensFiltrados, setItensFiltrados] = useState(data);

  // Função para aplicar o filtro
  const filtrarItens = () => {
    if (categoriasSelecionadas.length === 0) {
      setItensFiltrados(data); // Nenhum filtro, mostra todos os itens
    } else {
      const itensFiltrados = data.filter(item => categoriasSelecionadas.includes(item.tech));
      setItensFiltrados(itensFiltrados);
    }
  };

  // Manipulador de mudança de caixa de seleção
  const handleCheckboxChange = (event :any) => {
    const { value, checked } = event.target;
    if (checked) {
      setCategoriasSelecionadas([...categoriasSelecionadas, value]);
    } else {
      const novasCategoriasSelecionadas = categoriasSelecionadas.filter((categoria :any) => categoria !== value);
      setCategoriasSelecionadas(novasCategoriasSelecionadas);
    }
  };

  return (
    <section className='projects_layout'>
      <aside className="projects_aside">
        <>
          <ul className='projects_filter'>
            <div className="checkbox">
              <div className='flex'>
                <input type="checkbox" id="chk1" className="checkbox" value="java" onChange={handleCheckboxChange} />
                <label className='filter_name flex' htmlFor="chk1">
                  <span className='flex'>
                    <IconJava />
                    Java
                  </span>
                </label>
              </div>
            </div>
            <div className="checkbox">
              <div className='flex'>
                <input type="checkbox" id="chk2" className="checkbox" value="spring" onChange={handleCheckboxChange} />
                <label className='filter_name flex' htmlFor="chk2">
                  <span className='flex'>
                    <IconSpring />
                    Spring
                  </span>
                </label>
              </div>
            </div>
            <div className="checkbox">
              <div className='flex'>
                <input type="checkbox" id="chk3" className="checkbox" value="react" onChange={handleCheckboxChange} />
                <label className='filter_name flex' htmlFor="chk3">
                  <span className='flex'>
                    <IconReact />
                    React
                  </span>
                </label>
              </div>
            </div>
            <div className="checkbox">
              <div className='flex'>
                <input type="checkbox" id="chk4" className="checkbox" value="next" onChange={handleCheckboxChange} />
                <label className='filter_name flex' htmlFor="chk4">
                  <span className='flex'>
                    <IconNext />
                    NextJs
                  </span>
                </label>
              </div>
            </div>
            <div className="checkbox">
              <div className='flex'>
                <input type="checkbox" id="chk5" className="checkbox" value="angular" onChange={handleCheckboxChange} />
                <label className='filter_name flex' htmlFor="chk5">
                  <span className='flex'>
                    <IconAngular />
                    Angular
                  </span>
                </label>
              </div>
            </div>
            <div className="checkbox">
              <div className='flex'>
                <input type="checkbox" id="chk6" className="checkbox" value="nuxt" onChange={handleCheckboxChange} />
                <label className='filter_name flex' htmlFor="chk6">
                  <span className='flex'>
                    <IconNuxt />
                    Nuxt
                  </span>
                </label>
              </div>
            </div>
            <div className="checkbox">
              <div className='flex'>
                <input type="checkbox" id="chk7" className="checkbox" value="vue" onChange={handleCheckboxChange} />
                <label className='filter_name flex' htmlFor="chk7">
                  <span className='flex'>
                    <IconVue />
                    Vue.js
                  </span>
                </label>
              </div>
            </div>
            <button className='btn_filter' onClick={filtrarItens}>Aplicar Filtro</button>
          </ul>
          <ul>
          </ul>
        </>
      </aside>
      <section className='projects_content'>
      <main className="projects_list">
        {itensFiltrados.map(item => {
          return (
            <div className="card_wrapper" key={item.id}>
              <p className="project_title"><span><strong>Project {item.id}</strong></span> // {item.title}</p>
              <div className="project_card">
                <div className="img_wrapper">
                  <img src={`./covers/${item.id}.png`} alt={item.id} />
                  <div className="tech_box">
                    <img className='img_tech' src={`./icons/${item.tech}.png`} alt={item.tech} />
                  </div>
                </div>
                <div className="description">
                  <p>{item.description}</p>
                  <div className="btn flex">
                    <a target="_blank" href={item.view} className="btn_view">view-project</a>
                    <a target="_blank" href={item.github}><IconGithub /></a>
                  </div>
                </div>
              </div>
            </div>
          )
        })}</main>
      </section>
    </section>
  )
}